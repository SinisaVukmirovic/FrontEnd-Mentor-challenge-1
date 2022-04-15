window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    const menuBtn = header.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');

        const nav = header.querySelector('nav');
        const navLinks = header.querySelector('.nav-links');
        nav.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    
    const controlBtns = header.querySelectorAll('.controls button');
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // const offset = btn.dataset.control === 'next' ? 1 : -1;
            const textSlides = btn.parentElement.parentElement.nextElementSibling
            
            console.log([...textSlides.querySelectorAll('.slide')]);
        });
    });
















});