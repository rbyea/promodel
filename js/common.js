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

$("#back-top").hide();

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});

$("#back-top i").click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 800);
	return false;

		// gallery
$('[data-fancybox]').fancybox();
