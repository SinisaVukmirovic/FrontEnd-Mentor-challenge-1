window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');

        const nav = document.querySelector('nav');
        nav.classList.toggle('open');
    });
    
    const controlBtns = document.querySelectorAll('.controls button');
    // const textSlides = document.querySelector('[data-slides]');

    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const step = btn.dataset.control === 'left' ? -1 : 1;
            // console.log(step)
            const textSlides = document.querySelector('[data-slides]');

            const active = textSlides.querySelector('[data-active]');
            console.log([...textSlides.children].indexOf(active))

            let newIndex = [...textSlides.children].indexOf(active) + step;
            console.log(newIndex)
            
            if (newIndex < 0) newIndex = textSlides.children.length - 1;
            if (newIndex >= textSlides.children.length) newIndex = 0;

            textSlides.children[newIndex].dataset.active = true;
            delete active.dataset.active;
            
        });
    });
















});