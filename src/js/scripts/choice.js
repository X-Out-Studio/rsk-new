document.addEventListener("DOMContentLoaded", () => {
    const obtainingTabs = document.querySelectorAll(
        ".choice__content-radio-item input"
    );
    const tabQuantity = document.querySelector(".choice__decor-wrap-quantity");
    const tabRoom = document.querySelector(".choice__decor-wrap-room");

    obtainingTabs.forEach((tab) => {
        tab.addEventListener("change", function () {
            const tabId = this.getAttribute("data-id");

            const selectedQuantity = tabQuantity.querySelector(
                `[data-id="${tabId}"]`
            );
            const contents = tabQuantity.querySelectorAll(".choice__decor-quantity");
            contents.forEach((content) =>
                content.classList.remove("choice__decor-quantity--active")
            );
            selectedQuantity.classList.add("choice__decor-quantity--active");

            const selectedRoom = tabRoom.querySelector(`[data-id="${tabId}"]`);
            const contentsRoom = tabRoom.querySelectorAll(".choice__decor-room");
            contentsRoom.forEach((contentRoom) =>
                contentRoom.classList.remove("choice__decor-room--active")
            );
            selectedRoom.classList.add("choice__decor-room--active");
        });
    });

    // reng start
    const rangeInputs = document.querySelectorAll(".choice__content-range-input");

    function handleInputChange(e) {
        let target = e.target;
        if (e.target.type !== "range") {
            target = document.getElementById("range");
        }
        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    }

    rangeInputs.forEach((input) => {
        input.addEventListener("input", handleInputChange);
    });
});