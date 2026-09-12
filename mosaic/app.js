const CITY_CONFIG = {
    voronezh: { center: [51.6683, 39.1919], zoom: 14, label: 'Воронеже' },
    kolomna: { center: [55.10204, 38.76281], zoom: 15, label: 'Коломне' },
    moscow: { center: [55.75565, 37.64269], zoom: 14, label: 'Москве' }
};

const STATUS_CONFIG = {
    active: { key: 'active', label: 'Точка на карте' },
    'painted-over': { key: 'muted', label: 'Закрашена' },
    'partially-damaged': { key: 'muted', label: 'Частично разрушена' },
    unconfirmed: { key: 'unconfirmed', label: 'Местонахождение требует проверки' }
};

function getStatus(marker) {
    if (marker.status === 'active' && marker.photo) {
        return { key: 'active', label: 'Есть фотография' };
    }

    return STATUS_CONFIG[marker.status] || STATUS_CONFIG.active;
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    })[character]);
}

class MosaicMap {
    constructor() {
        const requestedId = new URL(location.href).searchParams.get('mosaic');
        this.initialMosaic = mosaicMarkers.find(({ id }) => id === requestedId) || null;
        this.activeCity = this.initialMosaic?.city || 'voronezh';
        this.activeMarker = null;
        this.markerEntries = [];
        this.details = document.querySelector('#details');
        this.resultCount = document.querySelector('#result-count');
        this.searchInput = document.querySelector('#search-input');
        this.connectionStatus = document.querySelector('#connection-status');
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        this.createMap();
        this.drawMarkers();
        this.bindControls();
        this.updateCityControls();
        this.updateCityCounts();
        this.updateConnectionStatus();
        this.filterMarkers();

        if (this.initialMosaic) {
            const entry = this.markerEntries.find(({ data }) => data.id === this.initialMosaic.id);
            if (entry) this.selectMarker(entry.marker, entry.data, { updateUrl: false, focusDetails: false });
        }
    }

    createMap() {
        const city = CITY_CONFIG[this.activeCity];
        const center = this.initialMosaic?.coords || city.center;
        const zoom = this.initialMosaic ? Math.max(city.zoom, 16) : city.zoom;

        this.map = L.map('mapid', {
            zoomControl: false,
            preferCanvas: true,
            minZoom: 3
        }).setView(center, zoom);
        this.map.attributionControl.setPrefix(false);

        L.control.zoom({ position: 'topleft' }).addTo(this.map);

        this.tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
            maxZoom: 19,
            keepBuffer: 1,
            updateWhenIdle: true,
            updateWhenZooming: false
        }).addTo(this.map);

        this.map.on('click', ({ latlng }) => this.logNewMarkerCoordinates(latlng));
    }

    logNewMarkerCoordinates(latlng) {
        const latitude = Number(latlng.lat.toFixed(7));
        const longitude = Number(latlng.lng.toFixed(7));
        const markerTemplate = `{
    id: '${this.activeCity}-new-mosaic', city: '${this.activeCity}',
    coords: [${latitude}, ${longitude}],
    title: 'Название мозаики', status: 'active'
},`;

        console.group('Новая точка мозаики');
        console.log('Координаты:', latitude, longitude);
        console.log(markerTemplate);
        console.groupEnd();
    }

    createIcon(marker, isActive = false) {
        const status = getStatus(marker);
        const classes = [
            'mosaic-marker',
            marker.photo ? 'mosaic-marker--photo' : '',
            marker.isNew ? 'mosaic-marker--new' : '',
            status.key === 'muted' ? 'mosaic-marker--muted' : '',
            status.key === 'unconfirmed' ? 'mosaic-marker--unconfirmed' : '',
            isActive ? 'is-active' : ''
        ].filter(Boolean).join(' ');
        const size = marker.photo ? 34 : 28;
        const newMarkup = marker.isNew
            ? '<span class="mosaic-marker__new" aria-hidden="true">✦</span>'
            : '';

        return L.divIcon({
            className: classes,
            html: `<span class="mosaic-marker__shape" aria-hidden="true"></span>${newMarkup}`,
            iconSize: [size, size],
            iconAnchor: [size / 2, size],
            tooltipAnchor: [0, -size + 5]
        });
    }

    drawMarkers() {
        mosaicMarkers.forEach((data) => {
            const marker = L.marker(data.coords, {
                icon: this.createIcon(data),
                keyboard: true,
                bubblingMouseEvents: false,
                title: data.title,
                alt: `Мозаика «${data.title}»`
            });

            marker.bindTooltip(data.title, { direction: 'top', offset: [0, -9] });
            marker.on('click', () => this.selectMarker(marker, data));
            marker.on('add', () => this.setMarkerPressed(marker, this.activeMarker?.data.id === data.id));
            this.markerEntries.push({ marker, data });
        });
    }

    bindControls() {
        document.querySelectorAll('.city-button').forEach((button) => {
            button.addEventListener('click', () => this.setCity(button.dataset.city));
        });

        this.searchInput.addEventListener('input', () => this.filterMarkers());
        window.addEventListener('online', () => this.updateConnectionStatus());
        window.addEventListener('offline', () => this.updateConnectionStatus());
        window.addEventListener('popstate', () => this.syncFromUrl());
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.activeMarker) this.closeDetails();
        });
    }

    setCity(city) {
        if (!CITY_CONFIG[city]) return;

        this.activeCity = city;
        this.updateCityControls();

        const config = CITY_CONFIG[city];
        if (this.prefersReducedMotion) {
            this.map.setView(config.center, config.zoom, { animate: false });
        } else {
            this.map.flyTo(config.center, config.zoom, { duration: 0.65 });
        }

        this.closeDetails({ restoreFocus: false });
        this.filterMarkers();
    }

    updateCityControls() {
        document.querySelectorAll('.city-button').forEach((button) => {
            const isActive = button.dataset.city === this.activeCity;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    filterMarkers() {
        const query = this.searchInput.value.trim().toLocaleLowerCase('ru');
        let resultCount = 0;
        let cityCount = 0;

        this.markerEntries.forEach(({ marker, data }) => {
            const searchable = `${data.title} ${data.address || ''}`.toLocaleLowerCase('ru');
            const shouldShow = !query || searchable.includes(query);
            const isVisible = this.map.hasLayer(marker);

            if (shouldShow && !isVisible) marker.addTo(this.map);
            if (!shouldShow && isVisible) marker.removeFrom(this.map);
            if (shouldShow) resultCount += 1;
            if (shouldShow && data.city === this.activeCity) cityCount += 1;
        });

        const cityLabel = CITY_CONFIG[this.activeCity].label;
        this.resultCount.textContent = resultCount
            ? query
                ? `${resultCount} ${this.pluralize(resultCount, ['результат', 'результата', 'результатов'])}`
                : `${cityCount} ${this.pluralize(cityCount, ['точка', 'точки', 'точек'])} в ${cityLabel}`
            : 'Ничего не найдено';
    }

    updateCityCounts() {
        document.querySelectorAll('.city-button').forEach((button) => {
            const count = this.markerEntries.filter(({ data }) => data.city === button.dataset.city).length;
            button.querySelector('.city-count').textContent = count;
        });
    }

    pluralize(number, forms) {
        const mod10 = number % 10;
        const mod100 = number % 100;
        if (mod10 === 1 && mod100 !== 11) return forms[0];
        if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
        return forms[2];
    }

    selectMarker(marker, data, { updateUrl = true, focusDetails = true } = {}) {
        if (this.activeMarker && this.activeMarker.data.id !== data.id) {
            this.activeMarker.marker.closeTooltip();
            this.activeMarker.marker.setIcon(this.createIcon(this.activeMarker.data));
            this.activeMarker.marker.setZIndexOffset(0);
            this.setMarkerPressed(this.activeMarker.marker, false);
        }

        this.activeMarker = { marker, data };
        marker.setIcon(this.createIcon(data, true));
        marker.setZIndexOffset(1000);
        this.setMarkerPressed(marker, true);
        this.renderDetails(data, { focusDetails });
        if (updateUrl) this.setMosaicUrl(data.id, 'push');
    }

    setMarkerPressed(marker, isPressed) {
        marker.getElement()?.setAttribute('aria-pressed', String(isPressed));
    }

    renderDetails(data, { focusDetails = true } = {}) {
        const status = getStatus(data);
        const newMarkup = data.isNew ? '<span class="details__new">Новое</span>' : '';
        const photoMarkup = data.photo ? this.getPhotoMarkup(data) : '';
        const instagramMarkup = data.instagramUrl
            ? `<a class="details__instagram" href="${escapeHtml(data.instagramUrl)}" target="_blank" rel="noopener noreferrer">Смотреть в Instagram ↗</a>`
            : '';
        const address = data.address || 'Точное место отмечено на карте';
        const coordinates = data.coords.map((value) => value.toFixed(5)).join(', ');

        this.details.classList.remove('is-empty');
        this.details.removeAttribute('aria-label');
        this.details.setAttribute('aria-labelledby', 'details-title');
        this.details.innerHTML = `
            ${photoMarkup}
            <div class="details__body">
                <button class="details__close" type="button" aria-label="Закрыть карточку">×</button>
                <p class="details__status">${newMarkup}<span>${escapeHtml(status.label)}</span></p>
                <h2 id="details-title" class="details__title" tabindex="-1">${escapeHtml(data.title)}</h2>
                <p class="details__address">${escapeHtml(address)}</p>
                <div class="details__actions">
                    ${instagramMarkup}
                    <button class="details__share" type="button">Скопировать ссылку</button>
                    <span class="details__coord" aria-label="Координаты: ${coordinates}">${coordinates}</span>
                </div>
                <span class="details__share-status visually-hidden" aria-live="polite"></span>
            </div>`;

        this.details.querySelector('.details__close').addEventListener('click', () => this.closeDetails());
        this.details.querySelector('.details__share').addEventListener('click', (event) => {
            this.copyMosaicLink(data.id, event.currentTarget);
        });

        const photoButton = this.details.querySelector('.photo-load-button');
        if (photoButton) {
            photoButton.addEventListener('click', () => {
                photoButton.parentElement.innerHTML = this.getImageMarkup(data, true);
                this.bindImageState();
            });
        } else {
            this.bindImageState();
        }

        if (focusDetails) {
            requestAnimationFrame(() => this.details.querySelector('#details-title')?.focus({ preventScroll: true }));
        }
    }

    getPhotoMarkup(data) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const effectiveType = connection?.effectiveType || '';
        const shouldWait = connection?.saveData || ['slow-2g', '2g', '3g'].includes(effectiveType);

        if (shouldWait) {
            return `<div class="details__photo-wrap">
                <button class="photo-load-button" type="button"><span>Показать фото · ${escapeHtml(data.photo.sizeLabel)}</span></button>
            </div>`;
        }

        return `<div class="details__photo-wrap">${this.getImageMarkup(data)}</div>`;
    }

    getImageMarkup(data, lowBandwidth = false) {
        const title = escapeHtml(data.title);
        const base = `assets/mosaics/${data.photo.filename}`;
        const responsiveSource = lowBandwidth
            ? ''
            : ` srcset="${base}-320.webp 320w, ${base}-640.webp 640w" sizes="(max-width: 700px) calc(100vw - 20px), 370px"`;
        return `
            <span class="photo-loading">Загружаем фото…</span>
            <img class="details__photo" src="${base}-320.webp"${responsiveSource} width="320" height="426" alt="Мозаика «${title}»" loading="lazy" decoding="async" fetchpriority="low">`;
    }

    bindImageState() {
        const image = this.details.querySelector('.details__photo');
        if (!image) return;

        const finish = () => {
            image.classList.add('is-loaded');
            this.details.querySelector('.photo-loading')?.remove();
        };
        const fail = () => {
            const loader = this.details.querySelector('.photo-loading');
            if (loader) loader.textContent = 'Фото не загрузилось';
        };

        image.addEventListener('load', finish, { once: true });
        image.addEventListener('error', fail, { once: true });
        if (image.complete && image.naturalWidth) finish();
    }

    async copyMosaicLink(id, button) {
        const url = this.getMosaicUrl(id).href;
        const status = this.details.querySelector('.details__share-status');

        try {
            if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
            await navigator.clipboard.writeText(url);
            button.textContent = 'Ссылка скопирована';
            if (status) status.textContent = 'Ссылка на мозаику скопирована';
        } catch {
            button.textContent = 'Ссылка в адресной строке';
            if (status) status.textContent = 'Не удалось скопировать автоматически. Ссылка открыта в адресной строке.';
        }

        window.setTimeout(() => {
            if (button.isConnected) button.textContent = 'Скопировать ссылку';
        }, 2400);
    }

    getMosaicUrl(id) {
        const url = new URL(location.href);
        url.searchParams.set('mosaic', id);
        return url;
    }

    setMosaicUrl(id, mode = 'replace') {
        const url = new URL(location.href);
        if (id) {
            url.searchParams.set('mosaic', id);
        } else {
            url.searchParams.delete('mosaic');
        }

        if (url.href !== location.href) history[`${mode}State`]({ mosaic: id || null }, '', url);
    }

    syncFromUrl() {
        const id = new URL(location.href).searchParams.get('mosaic');
        const entry = this.markerEntries.find(({ data }) => data.id === id);

        if (!entry) {
            this.closeDetails({ restoreFocus: false, updateUrl: false });
            return;
        }

        this.activeCity = entry.data.city;
        this.updateCityControls();
        const zoom = Math.max(CITY_CONFIG[this.activeCity].zoom, 16);
        this.map.setView(entry.data.coords, zoom, { animate: false });
        this.selectMarker(entry.marker, entry.data, { updateUrl: false });
        this.filterMarkers();
    }

    closeDetails({ restoreFocus = true, updateUrl = true } = {}) {
        const markerToFocus = this.activeMarker?.marker || null;

        if (this.activeMarker) {
            this.activeMarker.marker.closeTooltip();
            this.activeMarker.marker.setIcon(this.createIcon(this.activeMarker.data));
            this.activeMarker.marker.setZIndexOffset(0);
            this.setMarkerPressed(this.activeMarker.marker, false);
            this.activeMarker = null;
        }

        this.details.classList.add('is-empty');
        this.details.removeAttribute('aria-labelledby');
        this.details.setAttribute('aria-label', 'Информация о мозаике');
        this.details.innerHTML = `
            <div class="details__empty">
                <span class="details__spark" aria-hidden="true">✦</span>
                <div>
                    <p class="details__hint">Выберите точку</p>
                    <p>У отмеченных цветом меток есть фотографии.</p>
                </div>
            </div>`;

        if (updateUrl) this.setMosaicUrl(null);
        if (restoreFocus && markerToFocus && this.map.hasLayer(markerToFocus)) {
            requestAnimationFrame(() => markerToFocus.getElement()?.focus({ preventScroll: true }));
        }
    }

    updateConnectionStatus() {
        this.connectionStatus.hidden = navigator.onLine;
    }
}

function startMosaicMap() {
    if (!window.L) {
        document.querySelector('#result-count').textContent = 'Карта временно недоступна';
        return;
    }

    new MosaicMap();

    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js').catch(() => {
                const status = document.querySelector('#connection-status');
                status.textContent = 'Офлайн-режим временно недоступен';
                status.hidden = false;
            });
        });
    }
}

startMosaicMap();
