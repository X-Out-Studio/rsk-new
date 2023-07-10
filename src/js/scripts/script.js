document.addEventListener('DOMContentLoaded', () => {
  // mask
  var selector = document.querySelectorAll('.phone-mask');
  var im = new Inputmask('+1 999-999-99-99');
  im.mask(selector);

  var selector1 = document.querySelectorAll('#rangevalue');
  var im1 = new Inputmask('[9][9][9] 999 999', {
    numericInput: true,
  });
  im1.mask(selector1);

  const allLinks = document.querySelectorAll('a[href^="#"');

  allLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset =
        document.querySelector('.header').offsetHeight;
      const elementPosition =
        scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
});
