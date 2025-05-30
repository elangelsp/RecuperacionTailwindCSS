const carouselContainer = document.querySelector('.flex.overflow-x-auto');
const leftBtn = document.querySelector('button.absolute.left-0');
const rightBtn = document.querySelector('button.absolute.right-0');

const scrollAmount = 300;

rightBtn.addEventListener('click', () => {
  carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});




const submenu = document.getElementById('submenu');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

function toggleSubmenu() {
  if (window.innerWidth < 768) {
    submenu.classList.toggle('hidden');
  }
}



