import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'url';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    sources: []
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
    }
  },
  actions: {
    fetchArticles({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${params.country}&apiKey=${params.apiKey}`)
        .then(res => res.json())
        .then(data => {
          commit("FETCH_ARTICLES", data.articles);
          resolve();
          console.log('success', data.articles)
        })
        .catch(error => console.log(error))
      })
    },
    fetchSources({ commit }, apiKey) {
      return new Promise((resolve, reject) => {
        fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          commit("FETCH_SOURCES", data.sources);
          resolve();
          console.log('success', data.sources)
        })
        .catch(error => console.log(error))
      })
    },
    filterArticles({ commit }, params) {
      return new Promise((resolve, reject) => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=${params._source}&apiKey=${params.apiKey}`)
        .then(res => res.json())
        .then(data => {
          commit("FILTER_ARTICLES", data.articles)
        })
        .catch(error => console.log(errors))
      })
    }
  }
})