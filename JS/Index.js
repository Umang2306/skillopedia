document.addEventListener('DOMContentLoaded', () => {
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.style.backgroundColor = '#f7f7f7';
    });
    card.addEventListener('mouseout', () => {
      card.style.backgroundColor = '';
    });
  });

  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    if (!slides.length) return;

    slideIndex = (index + slides.length) % slides.length; // Wrap-around logic

    slides.forEach((slide, i) => {
      slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
  }

  function changeSlide(n) {
    showSlide(slideIndex + n);
  }

  document.querySelector('.prev')?.addEventListener('click', () => changeSlide(-1));
  document.querySelector('.next')?.addEventListener('click', () => changeSlide(1));

  const autoSlideInterval = setInterval(() => changeSlide(1), 3000);

  showSlide(slideIndex);

  const heroButton = document.querySelector('.hero a');
  heroButton?.addEventListener('click', () => {
    alert('Get Started button clicked!');
  });
});
