import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from '@/models/shared/RootState';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false,
  },
  mutations: {
    disableLoading(state) {
      state.isLoading = false;
    },
    enableLoading(state) {
      state.isLoading = true;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
};

export default new Vuex.Store<RootState>(store);
