const mosaicMarkers = [
    {
        coords: [51.65678496490777, 39.187461403671485],
        popupText: 'Динозавр'
    },
    {
        coords: [51.6683336583688, 39.20387894164379],
        popupText: 'Маяк'
    },
    {
        coords: [51.66283980817729, 39.19396239451089],
        popupText: 'Мышь'
    },
    {
        coords: [51.65866085684554, 39.19140550526209],
        popupText: 'Черепашка'
    },
    {
        coords: [ 51.65782158862597, 39.18915701357037],
        popupText: 'Лиса'
    },
    {
        coords: [51.65306609631122, 39.192352883292195],
        popupText: 'Сердце'
    },
    {
        coords: [51.653756238695806, 39.19355711852405],
        popupText: 'Ляшушка'
    },
    {
        coords: [51.65759510514901, 39.1970680191298],
        popupText: 'Нож'
    },
    {
        coords: [51.665963975585875, 39.201407100226795],
        popupText: 'Заяц'
    },
    {
        coords: [51.6690989561051, 39.204734044169534],
        popupText: 'Пистолет'
    },
    {
        coords: [51.66907345580261, 39.222661973180955],
        popupText: 'Паук краб'
    },
    {
        coords: [51.669123361160494, 39.22261369341869],
        popupText: 'Огрызок'
    },
    {
        coords: [51.65980270815523, 39.189626262141246],
        popupText: 'Яблоко'
    },
    {
        coords: [ 51.66196694696772, 39.19144453628178],
        popupText: 'Крокодил'
    },
    {
        coords: [51.67233857452443, 39.199979780150905],
        popupText: 'Папоротник'
    },
];


class Map {

    map;

    constructor() {
        this.createMap();
    }

    createMap() {
        this.map = L.map('mapid').setView([51.6683, 39.1919], 14);

        // this.map.on('click', (ev) => {
        //     console.log(ev.latlng)
        // });

        var gl = L.mapboxGL({
            attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            style: 'https://api.maptiler.com/maps/streets/style.json?key=gsrsyy45DnpndozB6p1n'
        }).addTo(this.map);
    }

    drawMarkers() {
        mosaicMarkers.forEach(marker => {
            const newMarker = L.marker(marker.coords).addTo(this.map);
            newMarker.on('click', () => {
                console.log(document.getElementsByClassName('aside')[0], marker)
                document.getElementsByClassName('aside')[0].innerHTML = marker.popupText;
            });
            // newMarker.bindPopup(marker.popupText);

        })
    }
}


function init() {
    const map = new Map();
    map.drawMarkers();

}
