document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".swiperBanks", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 45,
        autoplay: {
            delay: 20,
            disableOnInteraction: false,
            spaceBetween: 80,
        },
        speed: 5000,
        breakpoints: {
            500: {
                spaceBetween: 60,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
                autoplay: {
                    delay: 10
                },
            },
        },
    });
});