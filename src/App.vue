<template>
  <v-app light>
    <v-toolbar class="white--text" color="indigo darken-3">
      <v-toolbar-title v-text="appTitle"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <News />
    </v-content>
  </v-app>
</template>

<script>
import News from './components/News'
import { mapGetters, mapMutations, mapActions } from 'vuex'

const apiKey = "099148be22804e849a0c6fe022b7cf5e";

export default {
  name: 'App',
  components: {
    News
  },
  created: function() {
    this.$store.dispatch("articles/fetchArticles", {country: 'us', apiKey }).then(() => {
      console.log("Success: Fetch Articles")
    }),
    this.$store.dispatch("articles/fetchSources", apiKey).then(() => {
      console.log("Success: Fetch Sources")
    })
  },
  computed: {
    ...mapGetters({
      appTitle: 'articles/appTitle'
    })
  }
}
</script>
