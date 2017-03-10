import 'normalize.css';
import Vue from 'vue';
import Home from './pages/home/home.js';

new Vue({
  el: '#app',
  components: {
    'home': Home
  },
  template: '<home></home>'
});

