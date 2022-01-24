const hamburger = document.querySelectorAll('.bar');
const menu = document.querySelector('.nav-menu');



const hamburgerMenu = Array.from(hamburger);

console.log(hamburgerMenu);
hamburgerMenu.addEventListener('click', ()=>{
    menu.classList.toggle('.active');
})