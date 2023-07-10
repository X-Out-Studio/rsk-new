document.addEventListener("DOMContentLoaded", () => {
    //Burger
    const btnBurger = document.querySelectorAll(".header__burger");
    const btnBurgerClose = document.querySelectorAll(".page-menu__close");
    const itemBurgerClose = document.querySelectorAll(".page-menu__item");
    const burgerMenu = document.querySelectorAll(".page-menu__wrap");
    const body = document.body;

    btnBurger[0].addEventListener("click", function () {
        burgerMenu[0].classList.add("page-menu__wrap--active");
        body.style.overflow = "hidden";
    });
    btnBurgerClose[0].addEventListener("click", function () {
        burgerMenu[0].classList.remove("page-menu__wrap--active");
        body.style.overflow = "auto";
    });

    for (const itemBurger of itemBurgerClose) {
        itemBurger.addEventListener("click", function () {
            burgerMenu[0].classList.remove("page-menu__wrap--active");
            body.style.overflow = "auto";
        });
    }

    var header = document.querySelector(".header");

    if (window.scrollY > 10) {
        header.classList.add("header--active");
    } else {
        header.classList.remove("header--active");
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            header.classList.add("header--active");
        } else {
            header.classList.remove("header--active");
        }
    });
});