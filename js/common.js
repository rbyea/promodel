$(function() {

	var instance = $('#promo-video').data('vide');

	$("#menu").click(function () {
		$(".hum").toggleClass("is-active");
	});

	$('.hamburger').on('click', function () {
		$('.header-navbar__mobile').toggleClass('header-menu_vis');
	});

	$('.header-navbar__mobile_close').on('click', function () {
		$('.header-navbar__mobile').toggleClass('header-menu_vis');
	});

		$(".header-navbar__mobile_close").click(function () {
				$(".hum").toggleClass("is-active");
			});

		$('#btn-head').on('click', function () {
			$('.modal').toggleClass('modal-vis');
		});
		$('.modal-close').on('click', function () {
				$('.modal').toggleClass('modal-vis');
		});

		// gallery
		$('[data-fancybox]').fancybox();
});