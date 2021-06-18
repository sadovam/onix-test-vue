import Vue from 'vue';
import Vuex from 'vuex';

import {
  ICartPosition, ICategory, IOrder, IProduct, IProductTmb,
} from '@/common/interfaces';
import {
  fetchCategories, fetchSubCategories,
  fetchProductsByCategory, fetchProductsBySubCategory,
  fetchProduct, fetchCategory, fetchSubCategory,
} from '@/api';

Vue.use(Vuex);

interface HomeStore {
  categories: ICategory[],
  category: ICategory | null,
  subcategories: ICategory[],
  subcategory: ICategory | null,
  products: IProductTmb[],
  product: IProduct | null,
  cart: ICartPosition[],
  order: IOrder,
}

const orderInit :IOrder = {
  name: '',
  address: '',
  zip: '',
  phone: '',
  delivery: '',
  cardNumber: '',
  expDay: '',
  sequrityCode: '',
};

export default new Vuex.Store<HomeStore>({
  state: {
    categories: [],
    subcategories: [],
    products: [],
    product: null,
    category: null,
    subcategory: null,
    cart: [],
    order: orderInit,
  },
  mutations: {
    UPDATE_CATEGORIES(state, categories: ICategory[]) {
      state.categories = categories;
    },
    UPDATE_CATEGORY(state, category: ICategory) {
      state.category = category;
    },
    UPDATE_SUBCATEGORIES(state, subcategories: ICategory[]) {
      state.subcategories = subcategories;
    },
    UPDATE_SUBCATEGORY(state, subcategory: ICategory) {
      state.subcategory = subcategory;
    },
    UPDATE_PRODUCTS(state, products: IProductTmb[]) {
      state.products = products;
    },
    UPDATE_PRODUCT(state, product: IProduct) {
      state.product = product;
    },
    UPDATE_CART(state, item: ICartPosition) {
      state.cart.push(item);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    UPDATE_ORDER(state, order: IOrder) {
      state.order = order;
    },
    CLEAR_ORDER(state) {
      state.order = {
        name: '',
        address: '',
        zip: '',
        phone: '',
        delivery: '',
        cardNumber: '',
        expDay: '',
        sequrityCode: '',
      };
    },
  },
  actions: {
    async getCategories({ commit }) {
      const categories = await fetchCategories();
      commit('UPDATE_CATEGORIES', categories);
    },
    async getCategory({ commit }, { categoryId }) {
      const category = await fetchCategory(categoryId);
      commit('UPDATE_CATEGORY', category);
    },
    async getSubCategories({ commit }, { categoryId }) {
      const subcategories = await fetchSubCategories(categoryId);
      commit('UPDATE_SUBCATEGORIES', subcategories);
    },
    async getSubCategory({ commit }, { subcategoryId }) {
      const subcategory = await fetchSubCategory(subcategoryId);
      commit('UPDATE_SUBCATEGORY', subcategory);
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
    category: (state): ICategory | null => state.category,
    subcategories: (state): ICategory[] => state.subcategories,
    subcategory: (state): ICategory | null => state.subcategory,
    products: (state): IProductTmb[] => state.products,
    product: (state): IProduct | null => state.product,
    cart: (state): ICartPosition[] => state.cart,
    order: (state): IOrder => state.order,
  },
});
