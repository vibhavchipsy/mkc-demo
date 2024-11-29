document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".carousel1", {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1, // 1 slide for mobile
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2, // 2 slides for tablets
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, // 3 slides for desktops
        spaceBetween: 30,
      },
    },
    centeredSlides: false, // Ensures slides align to the start of the container
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
