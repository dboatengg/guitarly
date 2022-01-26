const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.getElementsByTagName('body');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle('lock-scroll')
}


const navLink = document.querySelectorAll(".nav-menu__item");
navLink.forEach((n) => n.addEventListener("click", removeOverflow));

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.toggle('opened');
}

//add the overflow function
function removeOverflow() {
    document.body.classList.remove('lock-scroll')
  }