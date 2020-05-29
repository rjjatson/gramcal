import Vue from "vue";
import Vuex from "vuex";
import Price from "@/models/price-model";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    price: Array<Price>()
  },

  mutations: {
    addPrice(state, newPrice: Price) {
      state.price.push({
        paperType: newPrice.paperType,
        pricePerKg: newPrice.pricePerKg
      });
    },
    clearPrice(state) {
      state.price = [];
    }
  },

  actions: {
    addPrice(context, newPrice: Price) {
      context.commit("addPrice", newPrice);
    },
    clearPrice(context) {
      context.commit("clearPrice");
    }
  }
});
