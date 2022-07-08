// aos.js
import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const aosPlugin = {
  install: () => {
    AOS.init({
      duration: 500, anchorPlacement: "top-center"     })
  },
}

if (process.client) {
  Vue.use(aosPlugin);
}