window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var headerHeight = document.querySelector('.hero').offsetHeight;

    if (window.scrollY >= headerHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});