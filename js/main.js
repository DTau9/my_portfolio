var tl = gsap.timeline();

gsap.to(".demonstration-website_lmarkt", {
	duration: 2,
	backgroundImage: "linear-gradient(180deg, rgb(205, 205, 255) 80%, rgb(181, 205, 255))"
})

gsap.to(".demonstration-website_russgaz", {
	duration: 2,
	backgroundImage: "linear-gradient(180deg, rgb(181, 205, 255)80%, rgb(255,230,180))"
})

gsap.to(".demonstration-website_kvast", {
	duration: 2,
	backgroundColor: "rgb(255,230,180)"
})

gsap.from(".mobile-wrapper", {
	duration: 4,
	delay: 1,
	opacity: 0
})

tl.from(".control-panel__item", {
	duration: 2,
	opacity: 0,
	y: "random(-400, 400)",
	x: "random(200, 1500)",
	ease: "back",
	stagger: 0.3
});

tl.to(".control-panel__item", {
	boxShadow: "0 0 33px -7px #000, inset 0 0 33px -10px #000",
	duration: 1.5
})

// var infinitLoopResize = gsap.timeline({ repeat: -1, yoyo: true })
// let resize = infinitLoopResize.fromTo(".resize-view", {
// 	height: 568,
// 	width: 320,
// 	ease: "none",
// 	duration: 20,
// }, {
// 	height: 1024,
// 	width: 1500,
// 	duration: 20
// })
// let resize = document.querySelector(".resize-wrapper")
// document.querySelector(".nav-button_play").onclick = () => resize.play();
// document.querySelector(".nav-button_pause").onclick = () => resize.pause();
