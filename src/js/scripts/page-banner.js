document.addEventListener("DOMContentLoaded", () => {
    var pageBanner = new Swiper(".page-banner__swiper", {
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: ".page-banner__swiper-next",
            prevEl: ".page-banner__swiper-prev",
        },
    });
});