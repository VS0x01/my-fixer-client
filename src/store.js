import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    errors: []
  },
  mutations: {
    addError(state, payload) {
      state.errors.push(payload.error);
    },
    clearErrors(state) {
      state.errors = [];
    }
  }
});

export default store;
