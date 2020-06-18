import { DynastyModel } from "../../model/DynastyModel";

export function initDynasties (state, { data }) {
    state.dynasties = [];
    for (let i = 0; i < data.length; i++) {
        const item = new DynastyModel();
        item.setItem(data[i]);
        state.dynasties.push(item);
    }
}
