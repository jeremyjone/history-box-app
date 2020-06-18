import { urls } from "../../boot/mixins";
import { get } from "../../boot/axios";

export function initDynasties({ commit }) {
  get(urls.getDynasties)
    .then(result => {
      if (result.status === 1) {
        const data = result.data;
        commit("initDynasties", { data });
      }
    });
}
