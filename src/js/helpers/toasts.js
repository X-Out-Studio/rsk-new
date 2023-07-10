export const toasts = {
  showToast: (msg, idToast, classes) => {
    // let myToastsContainer = document.getElementById('toast-alert-container');
    //
    // myToastsContainer.appendChild(this.t);

    let myToastEl = document.getElementById(idToast);

    for (let className of classes) {
      myToastEl.classList.add(className);
    }

    myToastEl.querySelector('.toast-body').innerHTML = msg;

    let myToast = bs.Toast.getInstance(myToastEl);

    myToast.show();
  },
  toasts: {
    'toastAlertSuccess': '<div class="toast fade hide" role="alert" id="toastAlertSuccess" aria-live="assertive" aria-atomic="true">\n' +
      '        <div class="toast-body"></div>\n' +
      '    </div>',
    'toastAlertInfo': '<div class="toast fade hide" role="alert" id="toastAlertInfo" aria-live="assertive" aria-atomic="true">\n' +
      '        <div class="toast-body"></div>\n' +
      '    </div>',
    'toastAlertDanger': '<div class="toast fade hide" role="alert" id="toastAlertDanger" aria-live="assertive" aria-atomic="true">\n' +
      '        <div class="toast-body"></div>\n' +
      '    </div>'
  }
}
