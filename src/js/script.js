$(document).ready(function () {

	//scrollTop

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 200) {
			$(".header").addClass("header--small");
		} else {
			$(".header").removeClass("header--small");
		};

		if (scroll >= 300) {
			$(".header__logo").addClass("header__logo--small");
		} else {
			$(".header__logo").removeClass("header__logo--small");
		};
	});

	//hamburger

	$(".burger").click(function () {
		$(this).toggleClass("active");
		$(".mobile-menu").toggleClass("active");
	});

	//slick-slider

	$('.partners__slider').slick({
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 4,
		// autoplay: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow_left_slider"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow_right_slider"></i></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//toTop

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 3000) {
			$('.toTop').addClass('show');
		} else {
			$('.toTop').removeClass('show');
		}
	});
	$('.toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 2000);
	});

});