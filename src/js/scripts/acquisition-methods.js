document.addEventListener('DOMContentLoaded', () => {
    /* Accordeon in block */
    const accordionItem = document.querySelectorAll(".acquisition-methods__item");

    accordionItem.forEach((elem) => {
        elem.addEventListener("click", () => {
            if (elem.classList.contains('acquisition-methods__item--active')) {
                elem.classList.remove('acquisition-methods__item--active');
            }
            else {
                accordionItem.forEach(item => {
                    item.classList.remove('acquisition-methods__item--active');
                });
                elem.classList.add('acquisition-methods__item--active');
            }
        });
    });
})