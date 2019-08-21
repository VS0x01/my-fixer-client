import Vue from "vue";
import VueRouter from "vue-router";
import router from "@/router";
import App from "./App.vue";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBZfLktBW9TtA8mthyr0W3v3gKTa_T_gbA",
    libraries: "places"
  },
  installComponents: true
});

Vue.use(VueRouter);

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
