const CITY_CONFIG = {
    voronezh: { center: [51.6683, 39.1919], zoom: 14, label: 'Воронеже' },
    kolomna: { center: [55.10204, 38.76281], zoom: 15, label: 'Коломне' },
    moscow: { center: [55.75565, 37.64269], zoom: 14, label: 'Москве' }
};

const PHOTO_LIBRARY = {
    'Хи-Хи2': {
        address: 'ул. Карла Маркса, 49',
        image: 'hihi',
        imageSize: '23 КБ',
        instagram: 'https://www.instagram.com/al_kachino_art/p/Dagckyminy1/'
    },
    'Растение в горшке': {
        address: 'ул. Карла Маркса, 56, со стороны Есенинской аллеи',
        image: 'plant-pot',
        imageSize: '17 КБ',
        instagram: 'https://www.instagram.com/al_kachino_art/p/Da3H162CjAf/'
    }
};

const PHOTO_BY_COORDINATES = {
    '51.66596,39.20141': {
        image: 'rabbit',
        imageSize: '7 КБ',
        instagram: 'https://www.instagram.com/p/CQJzA_whsem/'
    },
    '51.70780,39.14874': {
        image: 'bone',
        imageSize: '5 КБ',
        instagram: 'https://www.instagram.com/p/CR50ELHDbLh/'
    },
    '51.66907,39.22266': {
        address: 'набережная Воронежского водохранилища',
        image: 'spider-crab',
        imageSize: '15 КБ',
        instagram: 'https://www.instagram.com/p/CQ59ZRwjcvd/'
    },
    '51.67300,39.18474': {
        image: 'words',
        imageSize: '37 КБ',
        instagram: 'https://www.instagram.com/p/CczhiH5IPI9/'
    },
    '51.66838,39.20439': {
        address: 'ул. Фридриха Энгельса, недалеко от мозаики «Пистолет»',
        image: 'teddy',
        imageSize: '30 КБ',
        instagram: 'https://www.instagram.com/p/CcmoHWNj8rV/'
    },
    '51.66681,39.19783': {
        address: 'у Детской художественной школы',
        image: 'chicks',
        imageSize: '22 КБ',
        instagram: 'https://www.instagram.com/p/CVa2aitonOY/'
    },
    '51.66668,39.20577': {
        image: 'burger',
        imageSize: '12 КБ',
        instagram: 'https://www.instagram.com/p/Cu9BXIitU3N/'
    },
    '51.66658,39.20641': {
        address: 'гастромаркет «Коммуна»',
        image: 'corn',
        imageSize: '24 КБ',
        instagram: 'https://www.instagram.com/p/CvEPJVOoC4j/'
    },
    '51.66491,39.19427': {
        image: 'house',
        imageSize: '40 КБ',
        instagram: 'https://www.instagram.com/p/Cjc8RA-DKgV/'
    },
    '51.66514,39.19483': {
        image: 'pig',
        imageSize: '19 КБ',
        instagram: 'https://www.instagram.com/p/CjXVHn3Dqto/'
    },
    '51.67051,39.20577': {
        image: 'sparks',
        imageSize: '16 КБ',
        instagram: 'https://www.instagram.com/p/Cv-ZI0mtPJ5/'
    },
    '51.66614,39.20707': {
        address: 'напротив стендап-клуба в «Коммуне»',
        image: 'black-white-bird',
        imageSize: '26 КБ',
        instagram: 'https://www.instagram.com/p/DKSOsRbK951/'
    },
    '51.66624,39.20619': {
        address: 'проспект Революции, 43, в арке',
        image: 'woodpecker',
        imageSize: '29 КБ',
        instagram: 'https://www.instagram.com/p/DKe-QDWq5aZ/'
    },
    '51.66836,39.20234': {
        address: 'Никитинский сквер, у граффити с котёнком с улицы Лизюкова',
        image: 'blue-bird-nikitin',
        imageSize: '9 КБ',
        instagram: 'https://www.instagram.com/p/DKkLcGkKZuL/'
    },
    '51.66108,39.19854': {
        image: 'elephant-center',
        imageSize: '18 КБ',
        instagram: 'https://www.instagram.com/p/DQeB5UNinGz/'
    },
    '51.66627,39.20285': {
        address: 'ул. Карла Маркса, 78',
        image: 'yellow-bird',
        imageSize: '16 КБ',
        instagram: 'https://www.instagram.com/p/DPbmDhTii76/'
    },
    '51.67774,39.22439': {
        address: 'ул. Дурова, 7',
        image: 'lion',
        imageSize: '25 КБ',
        instagram: 'https://www.instagram.com/p/DOeVhSJijdQ/'
    },
    '51.67776,39.22581': {
        address: 'бетонная стена около ул. Дурова, 1',
        image: 'mouse-zebra',
        imageSize: '21 КБ',
        instagram: 'https://www.instagram.com/p/DOYPRrBCmNm/'
    },
    '51.67787,39.22608': {
        address: 'забор у дома-музея А. Л. Дурова',
        image: 'zebra-voronezh',
        imageSize: '38 КБ',
        instagram: 'https://www.instagram.com/p/DOTcZW3Cor8/'
    },
    '51.67773,39.22172': {
        address: 'ул. Дурова, забор у дома 21',
        image: 'bear',
        imageSize: '36 КБ',
        instagram: 'https://www.instagram.com/p/DOOhfF2Cpyu/'
    },
    '51.67773,39.21861': {
        address: 'ул. Сакко и Ванцетти, забор у дома 67',
        image: 'elephant-north',
        imageSize: '22 КБ',
        instagram: 'https://www.instagram.com/p/DOIoCC7ipQu/'
    }
};

function getCoordinateKey(marker) {
    return marker.coords.map((coordinate) => coordinate.toFixed(5)).join(',');
}

mosaicMarkers.forEach((marker) => Object.assign(
    marker,
    PHOTO_BY_COORDINATES[getCoordinateKey(marker)] || PHOTO_LIBRARY[marker.popupText] || {}
));

function getCity(marker) {
    const latitude = marker.coords[0];
    if (latitude < 53) return 'voronezh';
    if (latitude < 55.5) return 'kolomna';
    return 'moscow';
}

function getStatus(marker) {
    const name = marker.popupText.toLowerCase();
    if (name.includes('закраш')) return { key: 'muted', label: 'Закрашена' };
    if (name.includes('разруш')) return { key: 'muted', label: 'Частично разрушена' };
    return { key: 'active', label: marker.image ? 'Есть фотография' : 'Точка на карте' };
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    })[character]);
}

class MosaicMap {
    constructor() {
        this.activeCity = 'voronezh';
        this.activeMarker = null;
        this.markerEntries = [];
        this.details = document.querySelector('#details');
        this.resultCount = document.querySelector('#result-count');
        this.searchInput = document.querySelector('#search-input');
        this.connectionStatus = document.querySelector('#connection-status');

        this.createMap();
        this.drawMarkers();
        this.bindControls();
        this.updateCityCounts();
        this.updateConnectionStatus();
        this.filterMarkers();
    }

    createMap() {
        const start = CITY_CONFIG[this.activeCity];
        this.map = L.map('mapid', {
            zoomControl: false,
            preferCanvas: true,
            minZoom: 3
        }).setView(start.center, start.zoom);

        L.control.zoom({ position: 'topleft' }).addTo(this.map);

        this.tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
            maxZoom: 19,
            keepBuffer: 1,
            updateWhenIdle: true,
            updateWhenZooming: false
        }).addTo(this.map);
    }

    createIcon(marker, isActive = false) {
        const status = getStatus(marker);
        const classes = [
            'mosaic-marker',
            marker.image ? 'mosaic-marker--photo' : '',
            status.key === 'muted' ? 'mosaic-marker--muted' : '',
            isActive ? 'is-active' : ''
        ].filter(Boolean).join(' ');
        const size = marker.image ? 34 : 28;

        return L.divIcon({
            className: classes,
            html: '<span class="mosaic-marker__shape" aria-hidden="true"></span>',
            iconSize: [size, size],
            iconAnchor: [size / 2, size],
            tooltipAnchor: [0, -size + 5]
        });
    }

    drawMarkers() {
        mosaicMarkers.forEach((data) => {
            data.city = getCity(data);
            const marker = L.marker(data.coords, {
                icon: this.createIcon(data),
                keyboard: true,
                title: data.popupText,
                alt: `Мозаика «${data.popupText}»`
            });

            marker.bindTooltip(data.popupText, { direction: 'top', offset: [0, -9] });
            marker.on('click', () => this.selectMarker(marker, data));
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
    }

    setCity(city) {
        this.activeCity = city;
        document.querySelectorAll('.city-button').forEach((button) => {
            button.classList.toggle('is-active', button.dataset.city === city);
        });

        const config = CITY_CONFIG[city];
        this.map.flyTo(config.center, config.zoom, { duration: 0.65 });
        this.closeDetails();
        this.filterMarkers();
    }

    filterMarkers() {
        const query = this.searchInput.value.trim().toLocaleLowerCase('ru');
        let resultCount = 0;
        let cityCount = 0;

        this.markerEntries.forEach(({ marker, data }) => {
            const searchable = `${data.popupText} ${data.address || ''}`.toLocaleLowerCase('ru');
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

    selectMarker(marker, data) {
        if (this.activeMarker) {
            this.activeMarker.marker.setIcon(this.createIcon(this.activeMarker.data));
        }

        this.activeMarker = { marker, data };
        marker.setIcon(this.createIcon(data, true));
        this.renderDetails(data);
    }

    renderDetails(data) {
        const status = getStatus(data);
        const photoMarkup = data.image ? this.getPhotoMarkup(data) : '';
        const instagramMarkup = data.instagram
            ? `<a class="details__instagram" href="${data.instagram}" target="_blank" rel="noopener noreferrer">Смотреть в Instagram ↗</a>`
            : '';
        const creditMarkup = data.credit
            ? `<p class="details__credit">${escapeHtml(data.credit)}</p>`
            : '';
        const address = data.address || 'Точное место отмечено на карте';
        const coordinates = data.coords.map((value) => value.toFixed(5)).join(', ');

        this.details.classList.remove('is-empty');
        this.details.innerHTML = `
            ${photoMarkup}
            <div class="details__body">
                <button class="details__close" type="button" aria-label="Закрыть карточку">×</button>
                <p class="details__status">${escapeHtml(status.label)}</p>
                <h2 class="details__title">${escapeHtml(data.popupText)}</h2>
                <p class="details__address">${escapeHtml(address)}</p>
                ${creditMarkup}
                <div class="details__actions">
                    ${instagramMarkup}
                    <span class="details__coord">${coordinates}</span>
                </div>
            </div>`;

        this.details.querySelector('.details__close').addEventListener('click', () => this.closeDetails());

        const photoButton = this.details.querySelector('.photo-load-button');
        if (photoButton) {
            photoButton.addEventListener('click', () => {
                photoButton.parentElement.innerHTML = this.getImageMarkup(data, true);
                this.bindImageState();
            });
        } else {
            this.bindImageState();
        }
    }

    getPhotoMarkup(data) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const effectiveType = connection?.effectiveType || '';
        const shouldWait = connection?.saveData || ['slow-2g', '2g', '3g'].includes(effectiveType);

        if (shouldWait) {
            return `<div class="details__photo-wrap">
                <button class="photo-load-button" type="button"><span>Показать фото · ${escapeHtml(data.imageSize)}</span></button>
            </div>`;
        }

        return `<div class="details__photo-wrap">${this.getImageMarkup(data)}</div>`;
    }

    getImageMarkup(data, lowBandwidth = false) {
        const title = escapeHtml(data.popupText);
        const base = `assets/mosaics/${data.image}`;
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

    closeDetails() {
        if (this.activeMarker) {
            this.activeMarker.marker.setIcon(this.createIcon(this.activeMarker.data));
            this.activeMarker = null;
        }

        this.details.classList.add('is-empty');
        this.details.innerHTML = `
            <div class="details__empty">
                <span class="details__spark" aria-hidden="true">✦</span>
                <div>
                    <p class="details__hint">Выберите точку</p>
                    <p>У отмеченных цветом меток есть фотографии.</p>
                </div>
            </div>`;
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
        window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
    }
}

startMosaicMap();
