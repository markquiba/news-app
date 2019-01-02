const getSourceData = state => {
  let sourceData = state.sources.map(source => {
    return {
      text: source.name,
      value: source.id
    }
  })
  return sourceData
};

const appTitle = state => {
  return state.appTitle
};

const articles = state => {
  return state.articles
};

const headerTitle = state => {
  return state.headerTitle
};

const loader = state => {
  return state.loader
};

export default {
  getSourceData,
  appTitle,
  articles,
  headerTitle,
  loader
};