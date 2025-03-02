const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2500,
});

const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

const fleet1Content = Array.from(fleet1.children);
const fleet2Content = Array.from(fleet2.children);

fleet1Content.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  fleet1.appendChild(duplicateNode);
});

fleet2Content.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  fleet2.appendChild(duplicateNode);
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#B87B43",
  "#B57942",
  "#B27741",
  "#B07540",
  "#AD743F",
  "#AA723E",
  "#A7703D",
  "#A46E3C",
  "#A26C3B",
  "#9F6A3A",
  "#9C6939",
  "#996737",
  "#966536",
  "#946335",
  "#916134",
  "#8E5F33",
  "#8B5D32",
  "#885C31",
  "#865A30",
  "#83582F",
  "#80562E"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
