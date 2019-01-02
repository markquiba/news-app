import Vue from 'vue';
import Vuex from 'vuex';
import articlesModule from './modules/articles';
// import productsModule from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles: articlesModule,
    // products: productsModule,
  },
});