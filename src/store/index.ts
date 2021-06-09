import Vue from 'vue';
import Vuex from 'vuex';

import { ICategory } from '@/common/interfaces';
import fetchCategories from '@/api';

Vue.use(Vuex);

interface HomeStore {
  categories: ICategory[],
}

export default new Vuex.Store<HomeStore>({
  state: {
    categories: [],
  },
  mutations: {
    UPDATE_CATEGORIES(state, categories: ICategory[]) {
      state.categories = categories;
    },
  },
  actions: {
    async getCategories({ commit }) {
      const categories = await fetchCategories();
      commit('UPDATE_CATEGORIES', categories);
    },
  },
  modules: {
  },
  getters: {
    categories: (state): ICategory[] => state.categories,
  },
});
