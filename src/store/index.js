import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import articlesModule from './modules/articles';
// import productsModule from './modules/products';

Vue.use(Vuex);

const state = {
  headerTitle: 'Oh yeah'
};

export default new Vuex.Store({
  state,
  getters,
  modules: {
    articles: articlesModule,
    // products: productsModule,
  },
});