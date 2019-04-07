'use strict';

import './scss/_index.scss';

// Vendor

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/carousel';

// Vue

import Vue    from 'vue';
import App    from './App.vue';
import router from './router';

let app = new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app');
