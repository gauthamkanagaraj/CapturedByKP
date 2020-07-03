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
	$(".blur").fadeIn();
});

$(".close").on("click", function () {
	$(".navigation").fadeOut();
	$(".menu").slideDown();
	$(".close").hide();
	$(".blur").fadeOut();
});

$(".nav-home").on("click", function () {
	window.location.replace("home.html");
});

$(".nav-gallery").on("click", function () {
	window.location.replace("gallery.html");
});

$(".nav-about").on("click", function () {
	window.location.replace("about.html");
});

$(".portfolio").on("click", function () {
	window.location.replace("gallery.html");
});

$(".topbarbutton").on("click", function () {
	window.location.replace("home.html");
});