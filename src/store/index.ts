import Vue from 'vue';
import Vuex from 'vuex';

import { ICategory, IProduct, IProductTmb } from '@/common/interfaces';
import {
  fetchCategories, fetchSubCategories,
  fetchProductsByCategory, fetchProductsBySubCategory, fetchProduct,
} from '@/api';

Vue.use(Vuex);

interface HomeStore {
  categories: ICategory[],
  subcategories: ICategory[],
  products: IProductTmb[],
  product: IProduct | null,
}

export default new Vuex.Store<HomeStore>({
  state: {
    categories: [],
    subcategories: [],
    products: [],
    product: null,
  },
  mutations: {
    UPDATE_CATEGORIES(state, categories: ICategory[]) {
      state.categories = categories;
    },
    UPDATE_SUBCATEGORIES(state, subcategories: ICategory[]) {
      state.subcategories = subcategories;
    },
    UPDATE_PRODUCTS(state, products: IProductTmb[]) {
      state.products = products;
    },
    UPDATE_PRODUCT(state, product: IProduct) {
      state.product = product;
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
    async getProductsByCategory({ commit }, { categoryId }) {
      const products = await fetchProductsByCategory(categoryId);
      commit('UPDATE_PRODUCTS', products);
    },
    async getProductsBySubCategory({ commit }, { subcategoryId }) {
      const products = await fetchProductsBySubCategory(subcategoryId);
      commit('UPDATE_PRODUCTS', products);
    },
    async getProduct({ commit }, { productId }) {
      const product = await fetchProduct(productId);
      commit('UPDATE_PRODUCT', product);
    },
  },
  modules: {
  },
  getters: {
    categories: (state): ICategory[] => state.categories,
    subcategories: (state): ICategory[] => state.subcategories,
    products: (state): IProductTmb[] => state.products,
    product: (state): IProduct | null => state.product,
  },
});
