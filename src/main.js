import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
Vue.use(VueAnalytics, {
  id: "UA-156908775-1",
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
});
