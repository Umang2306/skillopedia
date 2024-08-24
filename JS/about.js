document.addEventListener('DOMContentLoaded', () => {
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
  });
  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});  