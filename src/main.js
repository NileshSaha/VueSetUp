import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from '@/axios'

import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax);
Vue.prototype.$http = axios,
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
