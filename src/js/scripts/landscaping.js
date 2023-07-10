document.addEventListener("DOMContentLoaded", () => {
    var landscaping = new Swiper(".landscaping__slider-swiper", {
        slidesPerView: 1,
        spaceBetween: 6,
        autoHeight: true,
        navigation: {
            nextEl: ".landscaping__slider-next",
            prevEl: ".landscaping__slider-prev",
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