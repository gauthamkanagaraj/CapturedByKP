$(".div1next").on("click", function () {
	$(".div1").fadeOut();
	$(".div2").fadeIn();
});

$(".div2next").on("click", function () {
	window.location.replace("home.html");
});