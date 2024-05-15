const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle navigation and icon on menu button click
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close navigation when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal animations
ScrollReveal().reveal(
  ".header__container .section__subheader",
  scrollRevealOption
);
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".news__card", { ...scrollRevealOption, interval: 500 });

// Slick slider initialization
$(document).ready(function () {
  $(".single").slick({
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    draggable: false,
  });

  // Custom navigation for slick slider
  $(".left").click(function () {
    $(".single").slick("slickPrev");
  });

  $(".right").click(function () {
    $(".single").slick("slickNext");
  });
});

// Room slider functionality

// Room slider functionality

