document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.bannerSwiper', {
        loop: true,
        // autoplay: {
        //     delay: 3000,
        // },
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