document.addEventListener('DOMContentLoaded', () => {
  const selectorTop = document.querySelector('.selector__top');
  selector = selectorTop.parentNode;
  const selectedText = selector.querySelector(
    '.layouts__selected-text'
  );
  let toolTipElem;
  const layoutsImg = document.querySelector('.layouts__img');
  const model3d = document.querySelector('.svg3d');
  const downloadLayouts = document.querySelector(
    '.layouts__download'
  );
  let hrefPath;

  selectorTop.addEventListener('click', function () {
    selector.classList.toggle('selector--active');
  });

  const pathHome = document.querySelectorAll('.path');
  let flag = true;
  fullSelectAndSectionHome(1);

  window.addEventListener('resize', () => {
    fullSelectAndSectionHome(1);
  });

  selector.addEventListener('click', function (event) {
    flag = false;
    const target = event.target;
    if (target.classList.contains('layouts__selected-item')) {
      let selectText = target.textContent;
      selectedText.textContent = selectText;
      selector.classList.remove('selector--active');
      console.log(target.getAttribute('id'));
      switch (target.getAttribute('id')) {
        case '1': {
          hrefPath = '/src/images/3dmodel/section1.png';
          downloadLayouts.style.cursor = 'pointer';
          downloadLayouts.style.pointerEvents = 'auto';
          downloadLayouts.style.opacity = '1';
          break;
        }
        case '2': {
          hrefPath = '/src/images/3dmodel/section2.png';
          downloadLayouts.style.cursor = 'pointer';
          downloadLayouts.style.pointerEvents = 'auto';
          downloadLayouts.style.opacity = '1';
          break;
        }
      }
      downloadLayouts.setAttribute('href', hrefPath);
      fullSelectAndSectionHome(target.getAttribute('id'));
    }
  });

  // Painting the Section and creating Popup for it
  function fullSelectAndSectionHome(id) {
    clearPath();
    if (toolTipElem) {
      toolTipElem.remove();
      toolTipElem = null;
    }
    const sectionHome = document.getElementById(`path${id}`);
    sectionHome.style.opacity = '1';
    let coordinates = sectionHome.getBoundingClientRect();
    let top =
      coordinates.top - layoutsImg.getBoundingClientRect().top;
    createToolTip(sectionHome.dataset.tooltip, top, coordinates.left);
  }

  function clearPath() {
    pathHome.forEach((elem) => {
      elem.style.opacity = 0;
    });
  }

  model3d.onmouseover = function (event) {
    let target = event.target;
    let toolHtml = target.dataset.tooltip;

    if (!toolHtml) return;
    if (target.closest('a')) {
      hrefPath = target.closest('a').getAttribute('href');
    } else {
      hrefPath = '/src/images/3dmodel/section1.png';
    }
    downloadLayouts.setAttribute('href', hrefPath);
    clearPath();
    flag = true;
    if (toolTipElem) {
      toolTipElem.remove();
      toolTipElem = null;
    }
    // if (toolHtml === '1' || toolHtml === '2') {
    //   downloadLayouts.style.cursor = 'not-allowed';
    //   downloadLayouts.style.pointerEvents = 'none';
    //   downloadLayouts.style.opacity = '0.15';
    // } else {
    downloadLayouts.style.cursor = 'pointer';
    downloadLayouts.style.pointerEvents = 'auto';
    downloadLayouts.style.opacity = '1';
    // }
    let coordinates = target.getBoundingClientRect();
    let top =
      coordinates.top - layoutsImg.getBoundingClientRect().top;
    createToolTip(toolHtml, top, coordinates.left);
    target.style.opacity = 1;
  };

  function createToolTip(sectionNumber, top, left) {
    toolTipElem = document.createElement('div');
    toolTipElem.className = 'section';
    toolTipElem.innerHTML = 'section ' + sectionNumber;
    // if (Number(sectionNumber) === 1 || Number(sectionNumber) === 2) {
    //   let sales = document.createElement('p');
    //   sales.className = 'section__text';
    //   sales.innerHTML = 'all apartments are sold';
    //   toolTipElem.append(sales);
    // } else {
    let sales = document.createElement('p');
    sales.className = 'section__text';
    sales.innerHTML = 'open plan';
    toolTipElem.append(sales);
    // }
    let triangle = document.createElement('div');
    triangle.className = 'triangle';
    toolTipElem.append(triangle);
    layoutsImg.append(toolTipElem);
    selectedText.textContent = `Section ${sectionNumber}`;

    let y = top - toolTipElem.offsetHeight / 4;
    let x = left - toolTipElem.offsetWidth / 4;

    if (top < 0) {
      top = coords.top + toolTipElem.offsetHeight + 20;
    }

    toolTipElem.style.left = x + 'px';
    toolTipElem.style.top = y + 'px';
    toolTipElem.style.opacity = 1;
  }
});
