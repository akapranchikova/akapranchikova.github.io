const mosaicMarkers = [
    {
        coords: [55.10485525586531, 38.76542069943753],
        img: 'https://sun6-21.userapi.com/s/v1/ig2/znHBETdLoiaNw61bbsHCukZ0sNfqcIn14QsoTVdlLHWg1QVmM2LHuyebvI1f35vPPAI-Zdd2JAoHLRUpEBT77u5D.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'Динозавр'
    },
    {
        coords: [55.10452112966388, 38.76606613397599],
        img: 'https://sun9-36.userapi.com/s/v1/ig2/_dAZrnGNvkcDcxnbTmPYxTVilqTteMJ6OPcTogUq-zjX40cKTobWkIjQXmZQrCWEeMgi2fy-ZTxpcH5ccaQlloeG.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'Маяк'
    },
    {
        coords: [55.104728278693074, 38.76819849014283],
        img: 'https://sun9-38.userapi.com/s/v1/ig2/pul867ZIaxvGQF7ZqHXTJ6ozNhOKc86NIZzfzLfPs0c61RiXQt8Ek5Q9x7C8LhZgfR3-DYomE24n4-qGe8RSq81u.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'Мышь'
    },
    {
        coords: [ 55.104029110780004, 38.76969456392545],
        img: 'https://sun9-46.userapi.com/s/v1/ig2/4Sc-cin_0WKCOF7M8PXutJbcx3gC1VZTHFY9hsjcu-RQOX-092Vf02szfyRIFg9nPzhKP6KmiMBmqXd2CNmO0UUK.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'Черепашка'
    },
    {
        coords: [ 55.100711401373474, 38.766892323601496],
        img: 'https://sun6-23.userapi.com/s/v1/ig2/lPS4hl7Y6D4q71I4lOpD2DTmPRj2wXzpaX9YpregZSfNE33onjNc44x_l_VpOs8bNsfEa431uu-fxuQEZvTH2K9P.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'фабрика'
    },
    {
        coords: [55.1008606243339,  38.76587343549546],
        img: 'https://sun9-55.userapi.com/s/v1/ig2/tsCZ_7X2MzCxrAAEkns438dRLHxLWAMyE48Xy1qgzGzZSQJj9XQCRGNlGjL0rKwhzdialLuXjPlJdnhTjoZB_LQN.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'вход1'
    },
    {
        coords: [55.10199996320048,  38.7675641477108],
        img: 'https://sun9-82.userapi.com/s/v1/ig2/LPpwd3pbZqs56ElN2fH_pegCR0J_hQr9WaBdlBtfZGeYzTHiyLTy9PGEWTGdsPctcDdWGBLQjFvppBB8e8at47qf.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'вход камера'
    },
    {
        coords: [55.102143993510815, 38.76775627926691],
        img: 'https://sun9-83.userapi.com/s/v1/ig2/vUhNlEV24AWXFo6a6ADM9DUDDXNlSQiBdYHOBti12cLAKkqAEyOg-CUSFYlO7kSzpjOJub1ZXO-PT3IDRqxFXgNQ.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'вход 2'
    },
    {
        coords: [55.10115874900605,  38.76503013811089],
        img: 'https://sun9-79.userapi.com/s/v1/ig2/G034hOqh73ir1F__-xeVXjhWgUYQxHkEihEyG_q9Kp8rsZ2IVKWWiZPBSrNn0MJB11AcvKoOjiviaFc6lQfrFqIW.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'зеленое'
    },
    {
        coords: [55.10143036703157, 38.76452051839806],
        img: 'https://sun9-68.userapi.com/s/v1/ig2/T109UbLwmf5OyPZrr5CPATwzNlBs2U2PY1YJ5OzdlZR1-7GK-deyKdMYi6O_wQxf4O-tG18ql-F93t3EJ837JFzS.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'кирпичное'
    },
    {
        coords: [55.100823286697974,  38.763282846739465],
        img: 'https://sun9-16.userapi.com/s/v1/ig2/tblEbBsHOukXpxhx4VPQJPircQDDnuWtFwX7LGPdMYv2wu5L0oqbZCO_xImrHdFUrBVOMKbP3C4yePisv3_XSP5-.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'вставки'
    },
    {
        coords: [55.10026230290336, 38.76223025896252],
        img: 'https://sun9-75.userapi.com/s/v1/ig2/NOAPiUp-05eBgIWUqwfIxf0_BoHP-KfIxk4Cd3r27O4XJqXQgA_6vIMZTzYfm8zhTLmESHEXKV3TSvvhGUOnK0XQ.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'зал'
    },
    {
        coords: [55.1012372905219, 38.76026988029481],
        img: 'https://sun9-38.userapi.com/s/v1/ig2/1at6S_WtP6II8XOVl5U-fM2V_tqfJW6aR6cEVOd-TRI7g4zbvdl6JfLItyqatdaye3RWOoUDG4hANtI78RKcUo4v.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'недалеко от сибаса вставки'
    },
    {
        coords: [ 55.101195452700736, 38.759099932121906],
        img: 'https://sun9-88.userapi.com/s/v1/ig2/4oIv2YVdn2cKo0KMfYH2eZaZJv7SUxmXieujRvBNu_qPcm9JGHxJr3UDGV1T9jnVpvPy7GLznlZ5Ij3NBqzqTEE3.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'сибас'
    },
    {
        coords: [ 55.10403462660368, 38.75570451171371],
        img: 'https://sun9-18.userapi.com/s/v1/ig2/3ONPJ6jEVSen1lnNarhaldaR503HsxxInhtEzeyMG4hx3rSVFXXPc2WnmNxw19iguk99WFW4Y_7yOJ-SLqVnmmoR.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'одинокое здание'
    },

    {
        coords: [55.103102295251105, 38.75697882423993],
        img:'https://sun9-5.userapi.com/s/v1/ig2/47cPgWQGVObTWzAOG_vEOMmMriOYp0rVQH_zLSBfKBsgTxOiMZBEUu75sN1b9bnyxtLSekRPvSVBd9IbG7TmVsxL.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'стена кремля'
    },
    {
        coords: [55.10143482021943, 38.759525934328856],
        img: 'https://sun9-57.userapi.com/s/v1/ig2/XIFmwI9Dcq1MONF9B4G5e-CMqWr4Q9yxWvzDo8BCduiDxRYzyW2wMBdf_SM0p9_bWGOXPyDX361xjP_fRIKOVgib.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'мис точка'
    },
    {
        coords: [55.106035397137546, 38.75636047765511],
        img: 'https://sun9-12.userapi.com/s/v1/ig2/Vc7f-uGk8z_ytE9241Yfj8HAeIERVT6mhlG68o4QS4RO1a8Uuiz6zMhnlNEvXv3oLiUyaJ4r5cE9J1_dDui6eoGE.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'падающее здание'
    },
    {
        coords: [55.100847160095256, 38.77069535923511],
        img: 'https://sun9-10.userapi.com/s/v1/ig2/J7zDYIUamTmyNsp2KSfbMDOd8CMxRPaaJg66BUMjUg5WVHw0WFEJzC1RUzDts2BsxkZo4bfkN7IQWIPSnKIWCISI.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'столбики'
    },
    {
        coords: [55.09717744830971, 38.762883029467055],
        img: 'https://sun9-78.userapi.com/s/v1/ig2/vkDCUIgu8eFWgJ2JO-2uZHGOIsoQEDrk7RJkNFMvONtLG5MgLqAWPq66c07w4tFV9VW-TLRvFnqMwZdnQ4XRsY8x.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'забор стена остановка'
    },
    {
        coords: [55.097853019523484, 38.76667753946095],
        img: 'https://sun9-21.userapi.com/s/v1/ig2/QiAUTQm0nZ5U5VcHBB5HQhqLoYbXXnzUJ8AclwrR0CLzIRVA_sDIeiNLCdYDob0G7acZ76U3YwL-EXrfotsQZW2_.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'голубенькое'
    },
    {
        coords: [55.097637755852794, 38.766364216799055],
        img: 'https://sun9-1.userapi.com/s/v1/ig2/zxNRszJAMgoVyBIzI54_VL9RRFZAXVoG1JtZosXpKy0nvSbjWOPzBGKy7y4L7Zegi6JV7QyaVE2r2v5_vLWjLBAr.jpg?size=1440x1920&quality=95&type=album',
        popupText: 'Рыбы'
    },

    // {
    //     coords: [51.66871755667519, 39.20455366373063],
    //     popupText: 'Мишка'
    // },
];


class Map {

    map;

    constructor() {
        this.createMap();
    }

    createMap() {
        this.map = L.map('mapid').setView([55.101298681409645, 38.76795403193683], 14);

        this.map.on('click', (ev) => {
            // console.log(ev.latlng)
        });

        var gl = L.mapboxGL({
            attribution: "\u003ca href=\"https://www.instagram.com/al_kachino_art/\" target=\"_blank\"\u003e\u0026copy; Instagram\u003c/a\u003e  ",
            style: 'https://api.maptiler.com/maps/streets/style.json?key=gsrsyy45DnpndozB6p1n'
        }).addTo(this.map);
    }

    drawMarkers() {
        mosaicMarkers.forEach(marker => {
            const newMarker = L.marker(marker.coords).addTo(this.map);
            const popup = L.popup()
                .setLatLng(marker.coords)
                .setContent('<img src="' + marker.img + '" alt="">');
            newMarker.bindPopup(popup);

        })
    }
}


function init() {
    const map = new Map();
    map.drawMarkers();

}
