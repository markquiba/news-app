const fetchArticles = (context, params) => {
  context.commit("ON_LOADER");
  return new Promise((resolve, reject) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${params.country}&apiKey=${params.apiKey}`)
    .then(res => res.json())
    .then(data => {
      context.commit("FETCH_ARTICLES", data.articles);
      context.commit("OFF_LOADER");
      resolve();
    })
    .catch(error => console.log(error))
  })
};

const fetchSources = (context, apiKey) => {
  context.commit("ON_LOADER");
  return new Promise((resolve, reject) => {
    fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      context.commit("FETCH_SOURCES", data.sources);
      context.commit("OFF_LOADER");
      resolve();
    })
    .catch(error => console.log(error))
  })
};

const filterArticles = (context, params) => {
  context.commit("ON_LOADER");
  return new Promise((resolve, reject) => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${params._source}&apiKey=${params.apiKey}`)
    .then(res => res.json())
    .then(data => {
      context.commit("FILTER_ARTICLES", data.articles)
      context.commit("OFF_LOADER");
    })
    .catch(error => console.log(errors))
  })
};

export default {
  fetchArticles,
  fetchSources,
  filterArticles
};