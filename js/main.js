window.addEventListener('DOMContentLoaded', () => {
    
    const controlBtns = document.querySelectorAll('.controls button');
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // const offset = btn.dataset.control === 'next' ? 1 : -1;
            const textSlides = btn.parentElement.parentElement.nextElementSibling
            
            console.log([...textSlides.querySelectorAll('.slide')]);
        });
    });
















});