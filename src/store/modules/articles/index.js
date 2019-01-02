import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  appTitle: 'News App',
  headerTitle: 'Headlines',
  articles: [],
  sources: [],
  filterName: 'Filter by Source',
  loader: false
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};