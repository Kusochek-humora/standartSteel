$('.catalog-sidebar__title').on("click", function () {
    $(this).next().slideToggle("fast", "linear", function () {});
    $(this).toggleClass('active-bg')
    $(this, 'svg').toggleClass('accordeon-item', 1000, 'linear')
})
$('.catalog-pag__btn').on('click', function () {
    $(this).toggleClass('pag-btn__active').fadeIn('slow')
})
$('.burger-menu').on('click', function () {
    $('.burger-menu').toggleClass('burger-activ')
    $('.burger-list').fadeToggle().toggleClass('burger-active__menu')
})
$('.close').on('click', function () {
    $('.burger-menu').removeClass('burger-activ')
    $('.burger-list').fadeToggle().removeClass('burger-active__menu')
})
$('.modal-call').magnificPopup({
    type: 'inline',
    // closeBtnInside: true
});
$('#close').on('click', function () {
    $.magnificPopup.close();
})
$('.assortment__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlideL: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
            breakpoint: 1235,
            settings: {
                slidesToShow: 3

            }
        }, {
            breakpoint: 835,
            settings: {
                slidesToShow: 2

            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1

            }
        },


    ]
});
$('.feedback__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.prevW'),
    nextArrow: $('.nextW'),
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
         
        }
    }, ]
});
// Initialize and add the map



$(document).ready(function () {
    var body = $("body");
    body.fadeIn(600);
    $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function (e) {
        e.preventDefault();
        $("body").fadeOut(600);
        var self = this;
        setTimeout(function () {
            window.location.href = $(self).attr("href");
        }, 600);
    });

});