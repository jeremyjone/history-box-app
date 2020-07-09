import Vue from "vue";
import { rootUrl } from "../variables";
import { Toast } from "../utils";

const appAttr = {
  title: "历史盒子",
  titleEn: "History Box",
  version: "1.0.1"
};

export const urls = {
  getDynasties: rootUrl + "/api/hb_dynasty",
  getEvents: rootUrl + "/api/hb_events"
};

Vue.prototype.$appAttr = appAttr;
Vue.prototype.$urls = urls;
Vue.prototype.$toast = Toast;
