document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("enrollModal");
    const openModalButtons = document.querySelectorAll(".play-button");
    const closeModalButton = document.querySelector(".close");
  
    function openModal() {
      modal.style.display = "block";
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', openModal);
    });
  
    closeModalButton.addEventListener('click', closeModal);
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  });  
  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});