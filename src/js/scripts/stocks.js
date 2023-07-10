document.addEventListener("DOMContentLoaded", () => {
var stocks = new Swiper(".stocks__swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    // autoHeight: true,
    watchOverflow: true,
    navigation: {
      nextEl: ".stocks__swiper-next",
      prevEl: ".stocks__swiper-prev",
    },
    breakpoints: {
      501: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
    },
  });
});