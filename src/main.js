// Vue.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons.js";

//Plugins
import { VLazyImagePlugin } from "v-lazy-image";
import VueLazyLoad from "vue-lazyload";
import VueSplide from "@splidejs/vue-splide";
import LinkPreview from "@ashwamegh/vue-link-preview";
import VueDragscroll from "vue-dragscroll";

//Components - Main
import Menu from "./components/Menu.vue";
import DesktopMenu from "./components/DesktopMenu.vue";
import ImageSlider from "./components/projects/ImageSlider.vue";
// -- Projects
import RelentlessGraceRadio from "./components/projects/RelentlessGraceRadio.vue";
import Multifeed from "./components/projects/Multifeed.vue";
import HomeMonitoringDashboard from "./components/projects/HomeMonitoringDashboard.vue";
import ColorsLogo from "./components/projects/ColorsLogo.vue";
import FiveYearsKindercentrumColorfulFlyer from "./components/projects/FiveYearsKindercentrumColorfulFlyer.vue";
import KindercentrumColorfulFlyer from "./components/projects/KindercentrumColorfulFlyer.vue";
import BarberIwanV2 from "./components/projects/BarberIwanV2.vue";

Vue.use(VLazyImagePlugin);
Vue.use(VueLazyLoad);
Vue.use(VueSplide);
Vue.use(VueDragscroll);

Vue.component("AppMenu", Menu);
Vue.component("DesktopMenu", DesktopMenu);
Vue.component("ImageSlider", ImageSlider);
Vue.component("LinkPreview", LinkPreview);

Vue.component("BarberIwanV2", BarberIwanV2);
Vue.component("RelentlessGraceRadio", RelentlessGraceRadio);
Vue.component("Multifeed", Multifeed);
Vue.component("HomeMonitoringDashboard", HomeMonitoringDashboard);
Vue.component(
  "FiveYearsKindercentrumColorfulFlyer",
  FiveYearsKindercentrumColorfulFlyer
);
Vue.component("KindercentrumColorfulFlyer", KindercentrumColorfulFlyer);
Vue.component("ColorsLogo", ColorsLogo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
