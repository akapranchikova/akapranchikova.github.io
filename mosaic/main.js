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



    {
        coords: [51.670377545356764, 39.190699659957325],
        popupText: 'Пчелы'
    },
    {
        coords: [51.664914524319464, 39.19884252663906],
        popupText: 'Яичница'
    },
    {
        coords: [51.665672201281964, 39.19950097293623],
        popupText: 'Таракан'
    },
    {
        coords: [51.6658235920637, 39.19935345144041],
        popupText: 'Марио'
    },
    {
        coords: [51.666202887749236, 39.202910121166504],
        popupText: 'Папоротник 2'
    },
    {
        coords: [51.669105156554934, 39.20219600200654],
        popupText: 'Акула'
    },
    {
        coords: [51.67141689449062, 39.20254540491442],
        popupText: 'Рыбы'
    },
    {
        coords: [51.67241209706212, 39.20243740081788],
        popupText: 'Ракета'
    },
    {
        coords: [51.70780412117194, 39.148741685075954],
        popupText: 'Кость'
    },
    {
        coords: [51.67269650975726, 39.19625733749854],
        popupText: 'Ящерица'
    },
    {
        coords: [51.67388800148916, 39.21014045397897],
        popupText: 'Папоротник 3'
    },
    {
        coords: [ 51.669227847990165,  39.195093081325474],
        popupText: 'Гусь'
    },
    {
        coords: [51.666813611257304, 39.197828024625785],
        popupText: 'Цыплята'
    },
    {
        coords: [51.657339274296156, 39.20341908931733],
        popupText: 'Лягушка'
    },
    {
        coords: [51.66677840208671, 39.207654025758536],
        popupText: 'Горы'
    },
    {
        coords: [51.66279585187353, 39.207250469780774],
        popupText: 'Хи-хи'
    },
    {
        coords: [51.6643834039455, 39.21128744531416],
        popupText: 'Таракан'
    },
    {
        coords: [51.67300426011623, 39.18474018573762],
        popupText: 'Слова'
    },
    {
        coords: [ 51.67428666373837, 39.189204114954926],
        popupText: 'Радуга'
    },
    {
        coords: [ 51.67223695241179, 39.19073187593313],
        popupText: 'Любовь'
    },
    {
        coords: [ 51.67133870930307, 39.188682668245754],
        popupText: 'Кринж'
    },
    {
        coords: [51.67145182237857, 39.18852173570486],
        popupText: 'Мышь'
    },
    {
        coords: [51.66871755667519, 39.20455366373063],
        popupText: 'Мишка'
    },
];


class Map {

    map;

    constructor() {
        this.createMap();
    }

    createMap() {
        this.map = L.map('mapid').setView([51.6683, 39.1919], 14);

        this.map.on('click', (ev) => {
            console.log(ev.latlng)
        });

        var gl = L.mapboxGL({
            attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
            style: 'https://api.maptiler.com/maps/streets/style.json?key=gsrsyy45DnpndozB6p1n'
        }).addTo(this.map);
    }

    drawMarkers() {
        mosaicMarkers.forEach(marker => {
            const newMarker = L.marker(marker.coords).addTo(this.map);
            // newMarker.on('click', () => {
            //     document.getElementsByClassName('aside')[0].innerHTML = marker.popupText;
            // });
            newMarker.bindPopup(marker.popupText);

        })
    }
}


function init() {
    const map = new Map();
    map.drawMarkers();

}
