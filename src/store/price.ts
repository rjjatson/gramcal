import Vue from 'vue';
import Vuex from 'vuex';
import Price from '@/models/price-model';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    price: new Map<string, number>()
  },

  mutations: {
    addPrice(state, newPrice: Price) {
      state.price.set(newPrice.paperType, newPrice.pricePerKg);
    }
  },

  actions: {
    addPrice(context, newPrice: Price) {
      context.commit('addPrice', newPrice);
    }
  }
});