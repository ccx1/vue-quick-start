import Vue from 'vue';
import router from "@/conts/router.ts";
import App from '@/App.vue'
import configureStore from '@/store/index.ts'
const store = configureStore();

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root');
