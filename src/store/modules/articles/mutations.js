const FETCH_ARTICLES = (state, articles) => {
  state.articles = articles
};

const FILTER_ARTICLES = (state, articles) => {
  state.articles = articles
};

const FETCH_SOURCES = (state, sources) => {
  state.sources = sources
};

const ON_LOADER = state => {
  state.loader = true
};

const OFF_LOADER = state => {
  state.loader = false
};

export default {
  FETCH_ARTICLES,
  FILTER_ARTICLES,
  FETCH_SOURCES,
  ON_LOADER,
  OFF_LOADER
};