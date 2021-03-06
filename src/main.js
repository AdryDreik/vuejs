// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';
import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';
Vue.config.productionTip = false;

// Injectando Vuetify
Vue.use(Vuetify, {
  theme: {
    primary: '#003366',
    secondary: '#3399FF',
    accent: '#82B1FF',
    info: '#00293C',
    warning: '#ffb822',
    error: '#f4516c',
    success: '#6B8E23'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
