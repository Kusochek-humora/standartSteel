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
    autoplay: true,
    autoplaySpeed: 2000,
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
    autoplay: true,
    autoplaySpeed: 2000,
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

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: '.gallery__inner-item',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
// Initialize and add the map
$('.tel-mask').mask('+0(000)000-00-00', {placeholder: "+7(777)777-77-77"});


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