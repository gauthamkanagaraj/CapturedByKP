$(window).on("load", function() {
	setTimeout(function () {
	$(".loading").hide();
	$(".main").fadeIn(800);
}, 3000);
});

$(".menu").on("click", function () {
	$(".navigation").fadeIn();
	$(".menu").hide();
	$(".close").slideDown();
});

$(".close").on("click", function () {
	$(".navigation").fadeOut();
	$(".menu").slideDown();
	$(".close").hide();
});