const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => 
navbar.classList.toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
.querySelectorAll(".menu a")
.forEach((link) => link.addEventListener("click", toggleMenu));

//Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    delay: 400,
    easing: "ease-in-out",
});

scrollReveal.reveal(".hero-headlines", { origin: "left" });
scrollReveal.reveal(".hero-page img", { origin: "right" });
scrollReveal.reveal(".about");
scrollReveal.reveal(".about h1", { delay: "500" });
scrollReveal.reveal(".about p", { delay: "700" });
scrollReveal.reveal(".about-info", { delay: "1000" });
scrollReveal.reveal(".collection h1");
scrollReveal.reveal(".collection-container", { delay: "900" });
scrollReveal.reveal(".review h1");
scrollReveal.reveal(".review-container", { delay: "800" });
scrollReveal.reveal(".callout");
scrollReveal.reveal(".contact");