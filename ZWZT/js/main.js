window.addEventListener('scroll', function(){
    const container = document.getElementById('container');
    if (window.scrollY > 80) {
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
});