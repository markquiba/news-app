<template>
  <v-container fluid grid-list-xs>
    <div class="top-toolbar">
      <Header />
      <FilterBySource />
    </div>
    <v-layout row wrap class="news-wrapper">
      <v-flex v-for="(article, index) in articles" :key="index" xs12 sm6 md4>
        <Article :article="article" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Header from './Header'
import FilterBySource from './FilterBySource'
import Article from './Article'

const apiKey = "099148be22804e849a0c6fe022b7cf5e";

export default {
  data() {
    return {
      selectedSource: ''
    }
  },
  components: {
    Header,
    FilterBySource,
    Article
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
