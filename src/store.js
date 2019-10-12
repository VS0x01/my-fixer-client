import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    account: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    },
    tokens: {
      access: localStorage.getItem("accessToken") || "",
      refresh: localStorage.getItem("refreshToken") || ""
    },
    errors: []
  },
  getters: {
    loggedIn: state => {
      return Object.keys(state.tokens).filter(key => !!state.tokens[key])
        .length;
    }
  },
  mutations: {
    updateAccountInfo(state, payload) {
      state.account = Object.assign(payload);
    },
    setTokens(state, payload) {
      state.tokens = Object.assign(payload);
    },
    pushErrors(state, payload) {
      state.errors = [...payload];
    }
  },
  actions: {
    login({ commit }, payload) {
      localStorage.setItem("accessToken", payload.tokens.access);
      localStorage.setItem("refreshToken", payload.tokens.refresh);
      commit("setTokens", payload.tokens);
      commit("pushErrors", []);
      if (payload.account) commit("updateAccountInfo", payload.account);
    },
    logout({ commit }) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      commit("setTokens", {});
      commit("updateAccountInfo", {});
    }
    /*manageAccountInfo({ commit, state }) {
      this.$http.setHeader(localStorage.getItem("accessToken"));
      this.$http.get();
      commit("updateAccountInfo", payload);
    }*/
  }
});

export default store;
