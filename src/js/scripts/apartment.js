document.addEventListener("DOMContentLoaded", () => {
    const apartmentTab = document.querySelectorAll(
        ".apartment__content-tab input"
    );
    const apartmentCard = document.querySelector(".apartment__content-cards");
    const labelButton = document.querySelectorAll('.label');
    let activeButtonTab = 0;
    activeTabColor(activeButtonTab);

    apartmentTab.forEach((tab) => {
        tab.addEventListener("change", function () {
            const apartmentTabId = this.getAttribute("data-id");
            activeButtonTab = this.dataset.number;
            const selectedApartmentCard = apartmentCard.querySelector(
                `[data-id="${apartmentTabId}"]`
            );
            const contentsApartmentCard = apartmentCard.querySelectorAll(
                ".apartment__content-cards-wrap"
            );
            contentsApartmentCard.forEach((content) =>
                content.classList.remove("apartment__content-cards-wrap--active")
            );
            contentsApartmentCard.forEach(
                (item) =>
                    (item.firstElementChild.querySelector("input").checked = false)
            );

            selectedApartmentCard.firstElementChild.querySelector(
                "input"
            ).checked = true;

            selectedApartmentCard.classList.add(
                "apartment__content-cards-wrap--active"
            );

            const selectedCard = selectedApartmentCard.querySelector(
                ".apartment__content-card"
            );
            const changeEvent = new Event("change");
            selectedCard.dispatchEvent(changeEvent);

            activeTabColor(activeButtonTab);
            scrollLabelButton();
        });
    });

    function activeTabColor(tab) {
        labelButton.forEach((elem) => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            }
        });
        labelButton[tab].classList.add('active');
    }

    function scrollLabelButton() {
        if (window.innerWidth < 1024) {
            // scroll script
            const widthApartmentButton = document.querySelector('.apartment__content-tabs');
            let x = (((widthApartmentButton.offsetWidth / apartmentTab.length) * activeButtonTab) - 100);
            document.querySelector('.apartment__content-tabs-wrap').scrollTo(x, 0);
        }
    }

    // ________________
    const cardButtonNext = document.querySelectorAll(
        ".apartment__card-button--next"
    );
    const cardButtonPrev = document.querySelectorAll(
        ".apartment__card-button--prev"
    );
    const cards = document.querySelectorAll(".apartment__content-cards");

    cardButtonNext.forEach((button) => {
        button.addEventListener("click", () => slideNext());
    });

    function slideNext() {
        cards.forEach((card) => {
            const inputs = card.querySelectorAll("input");
            const checkedInput = card.querySelector("input:checked");
            const currentIndex = Array.from(inputs).indexOf(checkedInput);
            const nextIndex = currentIndex + 1;
            if (nextIndex < inputs.length) {
                inputs[nextIndex].checked = true;
                const changeEvent = new Event("change");
                inputs[nextIndex].parentNode.dispatchEvent(changeEvent);
                if (inputs[nextIndex] != activeButtonTab) {
                    activeButtonTab = inputs[nextIndex].dataset.category;
                    activeTabColor(activeButtonTab);
                    scrollLabelButton();
                }
            }
        });
    }

    cardButtonPrev.forEach((button) => {
        button.addEventListener("click", () => slidePrev());
    });

    function slidePrev() {
        cards.forEach((card) => {
            const inputs = card.querySelectorAll("input");
            const checkedInput = card.querySelector("input:checked");
            const currentIndex = Array.from(inputs).indexOf(checkedInput);
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                inputs[prevIndex].checked = true;
                const changeEvent = new Event("change");
                inputs[prevIndex].parentNode.dispatchEvent(changeEvent);
                if (inputs[prevIndex] != activeButtonTab) {
                    activeButtonTab = inputs[prevIndex].dataset.category;
                    activeTabColor(activeButtonTab);
                    scrollLabelButton();
                }
            }
        });
    }

    if (window.innerWidth < 1024) {
        let swipeX;
        document.querySelector('.apartment__card').addEventListener('touchstart', e => swipeX = e.changedTouches[0].clientX);
        document.querySelector('.apartment__card').addEventListener('touchend', e => e.changedTouches[0].clientX - swipeX < -50 && slideNext());
        document.querySelector('.apartment__card').addEventListener('touchend', e => e.changedTouches[0].clientX - swipeX > -50 && slidePrev());
    }

    // _______________
    const itemsCard = document.querySelectorAll(".apartment__content-card");

    const cardElements = {
        room: document.querySelector(".apartment__card-room"),
        quadrature: document.querySelector(".apartment__card-room-square-items"),
        area: document.querySelector(".apartment__card-area"),
        price: document.querySelector(".apartment__card-price-items"),
        floor: document.querySelector(".apartment__card-text-floor"),
        deadline: document.querySelector(".apartment__card-text-deadline"),
        img: document.querySelector(".apartment__card-img img"),
    };

    itemsCard.forEach((itemCard) => {
        itemCard.addEventListener("change", function () {
            cardElements.room.textContent = this.querySelector(
                ".apartment__content-card-info-apartment"
            ).textContent;
            cardElements.quadrature.textContent = this.querySelector(
                ".apartment__content-card-info-quadrature"
            ).textContent;
            cardElements.area.textContent = this.querySelector(
                ".apartment__content-card-info-area"
            ).textContent;
            // cardElements.price.textContent = this.querySelector(
            //   ".apartment__content-card-info-price"   /////Это для стоимости квартиры
            // ).textContent;
            cardElements.floor.textContent = this.querySelector(
                ".apartment__content-card-info-floor"
            ).textContent;
            cardElements.deadline.textContent = this.querySelector(
                ".apartment__content-card-info-deadline"
            ).textContent;
            cardElements.img.setAttribute(
                "src",
                this.querySelector(".apartment__content-card-info-img").getAttribute(
                    "src"
                )
            );
        });
    });
});