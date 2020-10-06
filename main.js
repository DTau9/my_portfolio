var lmarkt = document.querySelector(".mobile-view");
var btnAutoResize = document.querySelector(".btn-autoresize")
var labelForChangeWidthAdaptiveLmarkt = document.querySelectorAll(".lmarkt-layout label");

btnAutoResize.addEventListener("click", function () {
	lmarkt.classList.toggle("mobile-view-autoresize");
})

for (let i = 0; i < labelForChangeWidthAdaptiveLmarkt.length; i++) {
	labelForChangeWidthAdaptiveLmarkt[i].addEventListener("click", function () {
		lmarkt.classList.remove("mobile-view-autoresize");
	})
}