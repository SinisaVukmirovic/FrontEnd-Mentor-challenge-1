window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');

        const nav = document.querySelector('nav');
        nav.classList.toggle('open');
    });
    
    const controlBtns = document.querySelectorAll('.controls button');
    // const textSlides = document.querySelector('[data-slides]');
    const textSlides = document.querySelector('[data-slides]');
    const imgSlides = [
        'url("./images/mobile-image-hero-1.jpg")',
        'url("./images/mobile-image-hero-2.jpg")',
        'url("./images/mobile-image-hero-3.jpg")'
    ];

    const header = document.querySelector('header');
    header.style.backgroundImage = imgSlides[0];

    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const step = btn.dataset.control === 'left' ? -1 : 1;
            
            const active = textSlides.querySelector('[data-active]');

            let newIndex = [...textSlides.children].indexOf(active) + step;
            
            if (newIndex < 0) newIndex = textSlides.children.length - 1;
            if (newIndex >= textSlides.children.length) newIndex = 0;

            header.style.backgroundImage = imgSlides[newIndex];
            textSlides.children[newIndex].dataset.active = true;
            delete active.dataset.active;            
        });
    });
















});