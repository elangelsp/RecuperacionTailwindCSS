const carouselContainer = document.querySelector('.flex.overflow-x-auto');
  const leftBtn = document.querySelector('button.absolute.left-0');
  const rightBtn = document.querySelector('button.absolute.right-0');

  const scrollAmount = 300; // píxeles por clic

  rightBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  leftBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });