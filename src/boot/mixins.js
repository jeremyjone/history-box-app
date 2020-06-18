import Vue from "vue";
import { rootUrl } from "../variables";
import { Toast } from "../utils";

const appAttr = {
  title: "历史盒子",
  titleEn: "History Box",
  version: "1.0.0"
};

export const urls = {
  getDynasties: rootUrl + "/hb_dynasty",
  getEvents: rootUrl + "/hb_events"
};

Vue.prototype.$appAttr = appAttr;
Vue.prototype.$urls = urls;
Vue.prototype.$toast = Toast;
