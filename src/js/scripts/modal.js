document.addEventListener('DOMContentLoaded', () => {
  // modal
  const contentModal = document.querySelector('.modal--content');
  const thanksModal = document.querySelector('.modal--thanks');
  const closeModal = document.querySelectorAll('.modal__close');
  const contentCloseModal = document.querySelector(
    '.modal__content-btn'
  );
  const contentOpenModalButtons = document.querySelectorAll(
    '.btn__open-modal'
  );
  const burgerMenu = document.querySelectorAll('.page-menu__wrap');
  const body = document.body;

  function openModal() {
    contentModal.classList.add('modal--active');
    burgerMenu[0].classList.remove('page-menu__wrap--active');
    body.style.overflow = 'hidden';
  }

  function closeModals() {
    thanksModal.classList.remove('modal--active');
    contentModal.classList.remove('modal--active');
    body.style.overflow = 'auto';
  }

  for (const closeMod of closeModal) {
    closeMod.addEventListener('click', closeModals);
  }

  contentCloseModal.addEventListener('click', function () {
    const form = document.querySelector('.modal__form');
    const nameInput = form.querySelector('#modal__form-name');
    const phoneInput = form.querySelector('#modal__form-phone');
    if (
      nameInput &&
      phoneInput &&
      nameInput.value &&
      phoneInput.value
    ) {
      contentModal.classList.remove('modal--active');
      thanksModal.classList.add('modal--active');
      setTimeout(() => {
        closeModals();
      }, 2000);
    } else {
      if (!nameInput.value) {
        nameInput.classList.add('modal__form-input--required');
      }
      if (!phoneInput.value) {
        phoneInput.classList.add('modal__form-input--required');
      }
      contentCloseModal.classList.add('modal__content-btn--req');
      setTimeout(() => {
        nameInput.classList.remove('modal__form-input--required');
        phoneInput.classList.remove('modal__form-input--required');
      }, 3000);
      setTimeout(() => {
        contentCloseModal.classList.remove('modal__content-btn--req');
      }, 400);
    }
  });

  contentOpenModalButtons.forEach((contentOpenModalButton) => {
    contentOpenModalButton.addEventListener('click', function () {
      const contentModal = document.querySelector(
        `#${this.getAttribute('data-modal-id')}`
      );
      openModal(contentModal);
    });
  });
  // test value input
  // let usernameField = document.querySelector("page-banner__form-name");
  // let usernameValue = usernameField.value;
  // let filled = /^\s*$/.test(usernameValue) === false;
  // if (!filled) {
  //   alert("Please fill in the username field.");
  //   return false; //
  // }
});
