document.addEventListener("DOMContentLoaded", () => {
    // stages__slider
    var stages = new Swiper(".stages__swiper", {
        slidesPerView: 1,
        spaceBetween: 19,
        autoHeight: true,
        navigation: {
            nextEl: ".stages__slider-next",
            prevEl: ".stages__slider-prev",
        },
        breakpoints: {
            501: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });
});