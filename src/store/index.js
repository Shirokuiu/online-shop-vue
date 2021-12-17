import Vue from "vue";
import Vuex from "vuex";
import Filter from "@/modules/filter/store/filter/filter.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Filter,
  },
});
