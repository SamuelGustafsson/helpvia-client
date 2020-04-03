import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    session: { showMissions: { value: null } }
  },
  actions: {
    setField(context, { value, group, field }) {
      context.commit("updateField", {
        group,
        field,
        value
      });
    }
  },
  mutations: {
    updateField(state, payload) {
      const { group, field } = payload;

      Vue.set(state[group][field], "value", payload.value);
    }
  },

  modules: {}
});
