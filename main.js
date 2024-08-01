const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-icon');
    let navBar = document.querySelector('.navbar');
    let menuItems = document.querySelectorAll('.navbar li a');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navBar.classList.toggle('open');
    };

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('bx-x');
            navBar.classList.remove('open');
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 550) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});
