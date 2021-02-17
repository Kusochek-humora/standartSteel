$('.assortment__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

$('.feedback__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.prevW'),
    nextArrow: $('.nextW')
});
// Initialize and add the map
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [43.282733, 76.915830],
        zoom: 13.5,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var placemark = new ymaps.Placemark([43.282733, 76.915830], {
        iconLayout: 'default#image',
        iconImageHref: 'img/sprite.png',
    });

    map.geoObjects.add(placemark);
}