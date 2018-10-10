import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'url';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: 'News App',
    headerTitle: 'Headlines',
    articles: [],
    sources: [],
    filterName: 'Filter by Source',
    loader: false
  },
  getters: {
    getSourceData: state => {
      let sourceData = state.sources.map(source => {
        return {
          text: source.name,
          value: source.id
        }
      })
      return sourceData
    }
  },
  mutations: {
    FETCH_ARTICLES(state, articles) {
      state.articles = articles
    },
    FETCH_SOURCES(state, sources) {
      state.sources = sources
    },
    FILTER_ARTICLES(state, articles) {
      state.articles = articles
    },
    ON_LOADER(state) {
      state.loader = true
    },
    OFF_LOADER(state) {
      state.loader = false
    }
  },
  actions: {
    fetchArticles({ commit }, params) {
      commit("ON_LOADER");
      return new Promise((resolve, reject) => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${params.country}&apiKey=${params.apiKey}`)
        .then(res => res.json())
        .then(data => {
          commit("FETCH_ARTICLES", data.articles);
          commit("OFF_LOADER");
          resolve();
        })
        .catch(error => console.log(error))
      })
    },
    fetchSources({ commit }, apiKey) {
      commit("ON_LOADER");
      return new Promise((resolve, reject) => {
        fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          commit("FETCH_SOURCES", data.sources);
          commit("OFF_LOADER");
          resolve();
        })
        .catch(error => console.log(error))
      })
    },
    filterArticles({ commit }, params) {
      commit("ON_LOADER");
      return new Promise((resolve, reject) => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=${params._source}&apiKey=${params.apiKey}`)
        .then(res => res.json())
        .then(data => {
          commit("FILTER_ARTICLES", data.articles)
          commit("OFF_LOADER");
        })
        .catch(error => console.log(errors))
      })
    }
  }
})