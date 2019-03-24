!function () {
    let allData = {};
    let data = {};
    const svgns = "http://www.w3.org/2000/svg";
    const svg = document.getElementById('svg-graphic');
    let maxX, minX;
    let maxY, maxYCurr;
    const dicDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dicMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let color = '#ffffff';

    const group = svg.appendChild(document.createElementNS(svgns, 'g'));
    group.classList.add('graph');
    const groupMini = svg.appendChild(document.createElementNS(svgns, 'g'));
    const groupForChange = document.createElementNS(svgns, 'g');
    const hoverMini = groupMini.appendChild(document.createElementNS(svgns, 'g'));
    const arrowRight = document.createElementNS(svgns, 'rect');
    const arrowLeft = document.createElementNS(svgns, 'rect');
    const axisY = svg.appendChild(document.createElementNS(svgns, 'g'));
    const axisX = svg.appendChild(document.createElementNS(svgns, 'g'));
    axisY.classList.add('axis');
    axisX.classList.add('axis');
    axisY.classList.add('axis-y');
    axisX.classList.add('axis-x');
    const tooltip = svg.appendChild(document.createElementNS(svgns, 'g'));

    let animation;
    let newY;

    let widthWindow = parseInt(getComputedStyle(svg).width, 10);
    let heightWindow = parseInt(getComputedStyle(svg).height, 10);

    let widthPreviewEl = 150;
    let offsePreviewEl = 150;

    let resize = false;
    let startX = 0;

    document.getElementById('select-graph').addEventListener('change', function (e) {
        data = allData[e.target.value];
        initFirst();
    });

    const showLines = {};
    const names = document.getElementById('names');

    SVGElement.prototype.attrs = function (attrobject) {
        for (let key of Object.keys(attrobject)) {
            this.setAttributeNS(null, key, attrobject[key]);
        }
    };

    fetch('./chart_data.json').then(response => {
        return response.json();
    }).then(d => {
        allData = d;
        data = d[0];
        initFirst();
    });

    function initFirst() {

        minX = data.columns[0][1];
        maxX = data.columns[0][data.columns[0].length - 1];

        maxY = data.columns[1][1];
        for (let i = 1; i < data.columns.length; i++) {
            showLines[data.columns[i][0]] = true;
            const elem = document.createElement('div');
            elem.className = 'name';
            const icon = document.createElement("div");
            icon.className = `icon active icon${i}`;
            icon.setAttribute('style', `border: 2px solid ${data.colors[data.columns[i][0]]}`);
            icon.innerHTML = '<style>.icon' + i + '::before{background-color:' + data.colors[data.columns[i][0]] + '!important;}</style>';
            elem.appendChild(icon);
            elem.innerHTML += data.names[data.columns[i][0]];
            elem.addEventListener('click', function () {
                this.firstChild.classList.toggle('active');
                showLines[data.columns[i][0]] = !showLines[data.columns[i][0]];
                document.querySelectorAll('.graph line[stroke="' + data.colors[data.columns[i][0]] + '"]').forEach(e => e.classList.toggle('hide'));
                setTimeout(function () {
                    drawGraphic();
                    drawMiniGraphic();
                    drawControl();
                }, 300);

            });

            names.appendChild(elem);
            for (let j = 0; j < data.columns[2].length; j++) {
                if (data.columns[i][j] > maxY) {
                    maxY = data.columns[i][j];
                }
            }
        }
        maxYCurr = maxY;
        init();

        groupForChange.addEventListener('touchstart', function (e) {
            if (e.cancelable) {
                e.preventDefault();
            }
            const style = window.getComputedStyle(groupForChange);
            const matrix = new WebKitCSSMatrix(style.webkitTransform);
            startX = e.changedTouches[0].clientX - matrix.e;
        });

        [arrowLeft, arrowRight].forEach(el => {
            el.addEventListener('touchstart', function (e) {
                if (e.cancelable) {
                    e.preventDefault();
                }
                resize = true;
            });
        });
        arrowLeft.addEventListener('touchmove', function (e) {
            e.preventDefault();
            changeLeftRange(e);
        });

        arrowRight.addEventListener('touchmove', function (e) {
            e.preventDefault();
            changeRightRange(e);
        });
        groupForChange.addEventListener('touchmove', function (e) {
            e.preventDefault();
            if (!resize) {
                changePosition(e);
            }
        });
        [groupForChange, arrowLeft, arrowRight].forEach(el => {
            ['touchend', 'touchcancel', 'touchleave'].forEach(event => {
                el.addEventListener(event, function (e) {
                    resize = false;
                    e.preventDefault();
                    drawControl();
                });
            });
        });

        document.getElementById('butSwitch').addEventListener('click', changeMode);
    }

    function init() {
        widthWindow = parseInt(getComputedStyle(svg).width, 10);
        heightWindow = parseInt(getComputedStyle(svg).height, 10);
        drawMiniGraphic();
        drawControl();
        drawGraphic();
        drawAxisY(maxYCurr);
    }

    function drawAxisY(max) {
        max -= 6;
        axisY.innerHTML = '';
        let step = Math.floor(max / 5);
        svg.style.backgroundSize = '100% ' + heightWindow * 0.8 * step / max + 'px';
        step = step - step % 5;
        for (let i = 0; i < max; i += step) {
            const text = document.createElementNS(svgns, 'text');
            text.setAttributeNS(null, 'y', (1 - i / max) * heightWindow * 0.8);
            text.textContent = i.toString();
            axisY.appendChild(text);
        }
        drawAxisX();
    }

    function drawAxisX() {
        axisX.innerHTML = '';
        const cntDates = 5;
        const minXCurr = ((maxX - minX) / widthWindow) * offsePreviewEl + minX;
        const maxXCurr = ((maxX - minX) / widthWindow) * (offsePreviewEl + widthPreviewEl) + minX;
        let posMin, posMax;
        for (let i = 1; i < data.columns[0].length - 1; i++) {
            if (minXCurr >= data.columns[0][i] && minXCurr <= data.columns[0][i + 1]) {
                posMin = i + 1;
            }
            if (maxXCurr >= data.columns[0][i] && maxXCurr <= data.columns[0][i + 1]) {
                posMax = i;
            }
        }
        const itemPerSection = Math.floor((posMax - posMin) / cntDates);
        for (let i = 0; i < cntDates; i++) {
            const x = (data.columns[0][posMin + itemPerSection * i + Math.ceil(itemPerSection * 0.5)] - minXCurr) / (maxXCurr - minXCurr);
            const text = document.createElementNS(svgns, 'text');
            text.attrs({
                x: x * widthWindow,
                y: heightWindow * 0.8,
                'text-anchor': 'middle'
            });
            const date = new Date(data.columns[0][posMin + itemPerSection * i + Math.ceil(itemPerSection * 0.5)]);
            text.textContent = '' + dicMonth[date.getMonth()] + ' ' + date.getDate();
            axisX.appendChild(text);
        }
    }

    function drawMiniGraphic() {
        groupMini.innerHTML = '';
        for (let i = 1; i < data.columns.length; i++) {
            if (!showLines[data.columns[i][0]]) {
                continue;
            }
            for (let j = 1; j < data.columns[0].length - 1; j++) {
                const x1 = (data.columns[0][j] - minX) / (maxX - minX);
                const y1 = 1 - (data.columns[i][j]) / (maxY);
                const x2 = (data.columns[0][j + 1] - minX) / (maxX - minX);
                const y2 = 1 - (data.columns[i][j + 1]) / (maxY);
                const line = document.createElementNS(svgns, 'line');
                line.attrs({
                    x1: x1 * widthWindow,
                    y1: y1 * heightWindow * 0.18,
                    x2: x2 * widthWindow,
                    y2: y2 * heightWindow * 0.18,
                    stroke: data.colors[data.columns[i][0]]
                });
                groupMini.appendChild(line);
            }
        }
    }

    function drawControl() {
        groupForChange.innerHTML = '';
        hoverMini.innerHTML = '';
        const rectHover = document.createElementNS(svgns, 'rect');
        let alpha = 0.8;
        if (color === '#ffffff') {
            alpha = 0.1;
        }
        rectHover.attrs({
            width: offsePreviewEl,
            height: heightWindow * 0.18,
            fill: `rgba(35, 47, 61, ${alpha})`
        });
        const rectHoverRight = document.createElementNS(svgns, 'rect');
        rectHoverRight.attrs({
            x: offsePreviewEl + widthPreviewEl,
            width: '100%',
            height: heightWindow * 0.18,
            fill: `rgba(35, 47, 61, ${alpha})`

        });
        hoverMini.appendChild(rectHover);
        hoverMini.appendChild(rectHoverRight);
        groupMini.appendChild(hoverMini);
        const rect = document.createElementNS(svgns, 'rect');
        rect.attrs({
            width: widthPreviewEl,
            height: heightWindow * 0.18,
            fill: 'transparent'
        });
        groupForChange.appendChild(rect);
        arrowLeft.attrs({
            width: 20,
            height: heightWindow * 0.18,
            fill: `rgba(235, 235, 255, ${1 - alpha})`
        });
        groupForChange.appendChild(arrowLeft);
        arrowRight.attrs({
            width: 20,
            x: widthPreviewEl - 20,
            height: heightWindow * 0.18,
            fill: `rgba(235, 235, 255, ${1 - alpha})`
        });
        groupForChange.appendChild(arrowRight);
        groupForChange.setAttributeNS(null, 'transform', `translate(${offsePreviewEl}, 0)`);
        groupMini.setAttribute('transform', `translate(0, ${heightWindow * 0.8})`);

        groupMini.appendChild(groupForChange);
    }

    function changeRightRange(e) {
        widthPreviewEl = e.changedTouches[0].pageX - offsePreviewEl;
        if (widthPreviewEl + offsePreviewEl > widthWindow) {
            offsePreviewEl = widthWindow - offsePreviewEl;
        }
        if (widthPreviewEl < 40) {
            widthPreviewEl = 40;
        }
        drawGraphic();
        drawControl();
    }

    function changeLeftRange(e) {
        widthPreviewEl = offsePreviewEl + widthPreviewEl - e.changedTouches[0].pageX;
        offsePreviewEl = e.changedTouches[0].pageX;
        if (offsePreviewEl < 0) {
            offsePreviewEl = 0;
        }
        if (widthPreviewEl < 40) {
            widthPreviewEl = 40;
        }
        groupForChange.setAttributeNS(null, 'transform', `translate(${offsePreviewEl}, 0)`);
        drawGraphic();
        drawControl();
    }

    function changePosition(e) {
        let offset = e.changedTouches[0].pageX - startX;
        if (offset < 0) {
            offset = 0;
        }
        if (offset + widthPreviewEl > widthWindow) {
            offset = widthWindow - widthPreviewEl;
        }
        offsePreviewEl = offset;
        groupForChange.setAttributeNS(null, 'transform', `translate(${offsePreviewEl}, 0)`);
        hoverMini.firstChild.setAttributeNS(null, 'width', offsePreviewEl);
        hoverMini.lastChild.setAttributeNS(null, 'x', offsePreviewEl + widthPreviewEl);
        drawGraphic();
    }

    function clickOnGraph(e, maxY) {
        const minXCurr = ((maxX - minX) / widthWindow) * offsePreviewEl + minX;
        const maxXCurr = ((maxX - minX) / widthWindow) * (offsePreviewEl + widthPreviewEl) + minX;
        e.stopPropagation();
        if (tooltip.innerHTML) {
            tooltip.innerHTML = '';
            return;
        }
        let point;
        const currX = e.clientX;
        for (let i = 1; i < data.columns[0].length - 1; i++) {
            const leftX = (data.columns[0][i] - minXCurr) * widthWindow / (maxXCurr - minXCurr);
            const rightX = ((data.columns[0][i + 1] - minXCurr) * widthWindow / (maxXCurr - minXCurr));
            if (currX >= leftX && currX <= rightX) {
                if (currX - leftX < rightX - currX) {
                    point = i;
                } else {
                    point = i + 1;
                }
            }
        }
        const x1 = (data.columns[0][point] - minXCurr) / (maxXCurr - minXCurr);
        const line = document.createElementNS(svgns, 'line');
        line.attrs({
            x1: x1 * widthWindow,
            y1: 0,
            x2: x1 * widthWindow,
            y2: heightWindow * 0.8,
            stroke: 'gray',
            'stroke-width': 1
        });
        tooltip.appendChild(line);

        let dataY = '';
        for (let i = 1; i < data.columns.length; i++) {
            if (!showLines[data.columns[i][0]]) {
                continue;
            }
            dataY += `<div class="value" style="color: ${data.colors[data.columns[i][0]]}">${data.columns[i][point]}</div>`;
            const y = 1 - data.columns[i][point] / maxY;
            const circle = document.createElementNS(svgns, 'circle');
            circle.attrs({
                cx: x1 * widthWindow,
                cy: y * heightWindow * 0.8,
                r: 5,
                y2: heightWindow * 0.8,
                fill: color,
                stroke: data.colors[data.columns[i][0]],
                'stroke-width': 3
            });
            tooltip.appendChild(circle);
        }
        const date = new Date(data.columns[0][point]);
        const rect = document.createElementNS(svgns, 'foreignObject');
        rect.attrs({
            x: x1 * widthWindow - 50,
            y: 0,
            width: 200,
            height: heightWindow * 0.8
        });
        const body = rect.appendChild(document.createElement('xhtml:body'));
        body.setAttribute('width', 100);
        body.setAttribute('height', 'auto');
        body.innerHTML = `<div class="tooltip" style="background-color: ${color}">
                                <div class="date">${dicDay[date.getDay()]}, ${dicMonth[date.getMonth()]} ${date.getDate()}</div>
                                <div class="wrap-values">
                                    ${dataY}
                                </div>
                           </div>`;
        tooltip.appendChild(rect);
    }

    function drawGraphic() {
        group.innerHTML = '';
        tooltip.innerHTML = '';
        const minXCurr = ((maxX - minX) / widthWindow) * offsePreviewEl + minX;
        const maxXCurr = ((maxX - minX) / widthWindow) * (offsePreviewEl + widthPreviewEl) + minX;
        checkNewY();
        for (let i = 1; i < data.columns.length; i++) {
            if (!showLines[data.columns[i][0]]) {
                continue;
            }
            for (let j = 1; j < data.columns[0].length - 1; j++) {
                if (data.columns[0][j] <= maxXCurr &&
                    (data.columns[0][j] >= minXCurr || (data.columns[0][j] < minXCurr && data.columns[0][j + 1] >= minXCurr))) {
                    const x1 = (data.columns[0][j] - minXCurr) / (maxXCurr - minXCurr);
                    const y1 = 1 - (data.columns[i][j]) / (maxYCurr);
                    const x2 = (data.columns[0][j + 1] - minXCurr) / (maxXCurr - minXCurr);
                    const y2 = 1 - (data.columns[i][j + 1]) / (maxYCurr);
                    const line = document.createElementNS(svgns, 'line');
                    line.attrs({
                        x1: x1 * widthWindow,
                        y1: y1 * heightWindow * 0.8,
                        x2: x2 * widthWindow,
                        y2: y2 * heightWindow * 0.8,
                        stroke: data.colors[data.columns[i][0]],
                    })
                    group.appendChild(line);
                }
            }
        }
        const area = document.createElementNS(svgns, 'rect');
        area.attrs({
            width: widthWindow,
            height: heightWindow,
            fill: 'transparent'
        });
        group.appendChild(area);
        area.addEventListener('click', function (e) {
            clickOnGraph(e, maxYCurr);
        });
    }

    function checkNewY() {
        const minXCurr = ((maxX - minX) / widthWindow) * offsePreviewEl + minX;
        const maxXCurr = ((maxX - minX) / widthWindow) * (offsePreviewEl + widthPreviewEl) + minX;
        let maxYCurrLocal = 0;
        for (let i = 1; i < data.columns.length; i++) {
            if (!showLines[data.columns[i][0]]) {
                continue;
            }
            for (let j = 1; j < data.columns[0].length; j++) {
                if (data.columns[0][j] <= maxXCurr &&
                    (data.columns[0][j] >= minXCurr || (data.columns[0][j] < minXCurr && data.columns[0][j + 1] >= minXCurr))) {
                    if (data.columns[i][j] > maxYCurrLocal) {
                        maxYCurrLocal = data.columns[i][j];
                    }
                }
            }
        }
        if (maxYCurrLocal !== maxYCurr) {
            drawAxisY(maxYCurr);
            newY = maxYCurrLocal;
            if (!animation) {
                startAnim();
            }
        }
    }

    function startAnim() {
        clearInterval(animation);
        animation = null;
        const speed = 1 / Math.abs(maxYCurr - newY);
        let val = 1;
        if (maxY > heightWindow * 0.8) {
            val = Math.floor(maxY / heightWindow * 0.8);
        }
        val = val < 1 ? 1 : val;
        animation = setInterval(function () {
            const coef = maxYCurr > newY ? -1 : 1;
            maxYCurr += coef * val * 3;
            if (coef > 0 && newY <= maxYCurr || coef < 0 && newY >= maxYCurr) {
                maxYCurr = newY;
                clearInterval(animation);
                animation = null;
            } else {
                drawGraphic();
            }
        }, speed);
    }

    ['resize', 'orientationchange'].forEach(event => {
        window.addEventListener(event, init);
    });
    window.addEventListener('click', function () {
        tooltip.innerHTML = '';
    });

    function changeMode() {
        if (color === '#ffffff') {
            color = '#232F3D';
            this.innerText = 'Switch to day mode';
            document.documentElement.style.color = '#ffffff';
        } else {
            color = '#ffffff';
            document.documentElement.style.color = '#000000';
            this.innerText = 'Switch to night mode';

        }
        drawControl();
        document.documentElement.style.backgroundColor = color;
    }
}();
