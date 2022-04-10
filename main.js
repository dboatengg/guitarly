const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const body = document.getElementsByTagName("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("lock-scroll");
}

const navLink = document.querySelectorAll(".nav__item");
navLink.forEach((n) => n.addEventListener("click", removeOverflow));

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.toggle("opened");
}

//add the overflow function
function removeOverflow() {
  document.body.classList.remove("lock-scroll");
}

// sticky navbar
// window.onscroll = function () {
//   myFunction();
// };

// let navbar = document.querySelector(".nav");
// let sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
