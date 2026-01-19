document.addEventListener('DOMContentLoaded', () => {
    // arrows - только если элементы существуют на странице
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.slide-arrow.left');
    const nextBtn = document.querySelector('.slide-arrow.right');
    
    if (slides && prevBtn && nextBtn) {
        const slideCount = document.querySelectorAll('.slide').length;
        let currentIndex = 0;

        function updateSlide() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlide();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlide();
        });
    }

    // burger menu
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !burger.contains(e.target)) {
                nav.classList.remove('active');
            }
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
});