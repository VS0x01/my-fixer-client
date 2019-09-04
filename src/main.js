import Vue from "vue";
import VueRouter from "vue-router";
import router from "@/router";
import store from "@/store";
import App from "./App.vue";
import ApiServices from "@/shared/services/api.services";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

ApiServices.init('https://my-fixer-api.herokuapp.com');
Vue.prototype.$http = ApiServices;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBGWuncMklXxCHQV3Ug5jgnCHZAsFl0SHk",
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
  store,
  render: h => h(App)
}).$mount("#app");
