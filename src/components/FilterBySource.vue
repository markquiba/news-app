<template>
  <v-select
    @change="() => filter(selectedSource)"
    v-model="selectedSource"
    class="filter-btn"
    :items="getSourceData"
    label="Filter by Source"
    outline
  ></v-select>
</template>

<script>
import { mapGetters } from 'vuex'

const apiKey = "099148be22804e849a0c6fe022b7cf5e";

export default {
  data() {
    return {
      selectedSource: ''
    }
  },
  computed: {
    ...mapGetters({
      getSourceData: 'articles/getSourceData'
    })
  },
  methods: {
    filter(selectedSource) {
      this.$store.dispatch("articles/filterArticles", { _source: selectedSource, apiKey }).then(() => {
        console.log("Success: Filtered Articles")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-btn {
  float: right;
  padding: 0;
  margin: 0;
}
</style>
