import Vue from 'vue';
import Vuex from 'vuex';

import { ICategory, ISubCategory } from '@/common/interfaces';
import { fetchCategories, fetchSubCategories } from '@/api';

Vue.use(Vuex);

interface HomeStore {
  categories: ICategory[],
  subcategories: ISubCategory[],
}

export default new Vuex.Store<HomeStore>({
  state: {
    categories: [],
    subcategories: [],
  },
  mutations: {
    UPDATE_CATEGORIES(state, categories: ICategory[]) {
      state.categories = categories;
    },
    UPDATE_SUBCATEGORIES(state, subcategories: ISubCategory[]) {
      state.subcategories = subcategories;
    },
  },
  actions: {
    async getCategories({ commit }) {
      const categories = await fetchCategories();
      commit('UPDATE_CATEGORIES', categories);
    },
    async getSubCategories({ commit }, { categoryId }) {
      const subcategories = await fetchSubCategories(categoryId);
      commit('UPDATE_SUBCATEGORIES', subcategories);
    },
  },
  modules: {
  },
  getters: {
    categories: (state): ICategory[] => state.categories,
    subcategories: (state): ISubCategory[] => state.subcategories,
  },
});
