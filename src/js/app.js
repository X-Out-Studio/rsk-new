require('./bootstrap');

let Inputmask = require('inputmask');
// import Inputmask from "inputmask.es6.js";

import '../scss/app.scss';

import { createApp } from 'vue';
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  Scrollbar,
} from 'swiper';

import Toast, { POSITION } from 'vue-toastification';
import vfmPlugin from 'vue-final-modal';

// Import  css
import 'vue-toastification/dist/index.css';

// Import components
import { require } from 'webpack/lib/RuntimeGlobals';

Swiper.use([
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  EffectFade,
  Scrollbar,
]);
window.Swiper = Swiper;
// window.Vue = Vue;

const app = createApp({});

const toastOptions = {
  // You can set your default options here
  position: POSITION.TOP_RIGHT,
};

app.use(Toast, toastOptions);
app.use(vfmPlugin);

require('./helpers');
require('./main');
require('./scripts/header');
require('./scripts/script');
require('./scripts/modal');
require('./scripts/page-banner');
require('./scripts/choice');
require('./scripts/stages');
require('./scripts/location');
require('./scripts/landscaping');
require('./scripts/layouts');
require('./scripts/apartment');
require('./scripts/stocks');
require('./scripts/acquisition-methods');
require('./scripts/our-banks');
// require("./scripts/file");

// require("suggestions-jquery/dist/js/jquery.suggestions");

// Initializing tosts
// let toastElList = [].slice.call(document.querySelectorAll('.toast'))
// let toastList = toastElList.map(function (toastEl) {
//   return new bs.Toast(toastEl, {
//     delay: 5000
//   })
// })

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Components autoload
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('setting-component', settingsComponent)

// const app = new Vue({
//   el: '#umax_webmaster_performers_pro',
// });

app.mount('#root');
