<template>
  <h1 class="header-title">{{ headerTitle }}</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'headerTitle'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 3.6em;
  color:#5C6BC0;
  float: left;
}
</style>
