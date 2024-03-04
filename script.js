document.addEventListener("DOMContentLoaded", function () {
	const img = document.querySelector(".contact-info img");

	img.addEventListener("contextmenu", function (event) {
		event.preventDefault(); // Забороняємо стандартне контекстне меню
	});
});
document.addEventListener("DOMContentLoaded", function(){
var scroll_arrow = document.querySelector(".scrollup");
// scroll_arrow - це змінна, яка отримала стрілку з документа
window.addEventListener("scroll", function(){
	if (window.scrollY < 100) {scroll_arrow.style.display = "none";}
	else {scroll_arrow.style.display = "flex";}
});
scroll_arrow.addEventListener("click", function(){
	window.scrollTo({top:0,
									behavior: "smooth"});
});
});