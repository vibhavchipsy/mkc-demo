document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.bannerSwiper', {
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        loop: true,
        autoplay: {
            delay: 1000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});