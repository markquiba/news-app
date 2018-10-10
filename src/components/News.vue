<template>
  <v-container fluid grid-list-sm>
    <div class="top-toolbar">
      <h1 class="head-title">Headlines</h1>
      <v-btn class="filter-btn" color="info">Filter</v-btn>
    </div>
    <v-layout row wrap class="news">
      <v-flex v-for="(article, index) in articles" :key="index" xs3>
        <div>
          {{ article.title }}
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'articles'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-btn {
  float: right;
}
.head-title {
  float: left;
}
.top-toolbar {
  overflow: hidden;
}
</style>
