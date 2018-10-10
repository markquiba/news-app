<template>
  <v-container fluid grid-list-xs>
    <div class="top-toolbar">
      <Header />
      <FilterBySource />
    </div>
    <v-layout row wrap class="news-wrapper">
      <v-flex v-for="(article, index) in articles" :key="index" xs12 sm6 md4>
        <div class="article-wrapper">
          <div :v-if="article.urlToImage != null" class="article" :style="`background-image: url(${ (article.urlToImage != null) ? article.urlToImage : 'https://media.istockphoto.com/photos/abstract-blurred-background-image-with-beautiful-colors-picture-id501776098?k=6&m=501776098&s=612x612&w=0&h=9nGtVlPb6Cedv-T9G6h5U5kLD_goVfUcvQ1G1nb6lJk='});`"></div>
          <div class="content">
              <span>{{ article.publishedAt | moment("DD.MM.YY") }}</span>
              <h5>{{ article.title }}</h5>
              <small>{{ article.content }}</small>
            </div>
        </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Header from './Header'
import FilterBySource from './FilterBySource'

const apiKey = "099148be22804e849a0c6fe022b7cf5e";

export default {
  data() {
    return {
      selectedSource: ''
    }
  },
  components: {
    Header,
    FilterBySource
  },
  computed: {
    ...mapState([
      'articles'
    ]),
    ...mapGetters([
      'getSourceData'
    ])
  },
  methods: {
    filter(selectedSource) {
      this.$store.dispatch("filterArticles", { _source: selectedSource, apiKey }).then(() => {
        console.log("Success: Filtered Articles")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
	width: 100%;
	height: 300px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
  border-radius: 5px;
  transition: 0.3s ease-in;
}

.img-filter {
  position: relative;
}

.article .content {
  position: relative;
  bottom: 0;
  padding: 20px;
}

.search {
  margin-top: 50px;
}

.top-toolbar {
  overflow: hidden;
}
.news-wrapper {
  margin-top: -15px !important;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .head-title {
    display: none;
  }
}
</style>
