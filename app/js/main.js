$('.catalog-sidebar__item').on("click", function () {
    $(this).find('.catalog-sidebar__options').slideToggle("fast", "linear", function () {});

    $(this).find('.catalog-sidebar__title').toggleClass('active-bg')
    $(this).find('.catalog-sidebar__title>svg').toggleClass('accordeon-item', 1000, 'linear')

    $(this).find('catalog-sidebar__options').on('click', function () {
        $('.catalog-sidebar__options').off()

        $('.catalog-sidebar__title').off()
        $('.catalog-sidebar__title>svg').off()
    })

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