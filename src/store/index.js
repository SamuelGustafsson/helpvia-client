import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    missions: null
  },
  actions: {
    setField(context, { value, field }) {
      context.commit("updateField", {
        field,
        value
      });
    }
  },
  mutations: {
    updateField(state, payload) {
      const { field } = payload;
      Vue.set(state, field, payload.value);
    }
  },

  modules: {}
});
