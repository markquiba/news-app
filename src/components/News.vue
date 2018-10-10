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

export default {
  components: {
    Header,
    FilterBySource,
    Article
  },
  computed: {
    ...mapState([
      'articles'
    ])
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
</style>
