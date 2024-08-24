document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function(){
        popup.style.display = "none";
        location.reload();
    }, 3000);
});
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
document.querySelector(".popup-content .close").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
    location.reload(); 
});