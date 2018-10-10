<template>
  <a href="#">
    <div class="article-wrapper">
      <div :v-if="article.urlToImage != null" class="article-image" :style="`background-image: url(${ (article.urlToImage != null) ? article.urlToImage : 'https://media.istockphoto.com/photos/abstract-blurred-background-image-with-beautiful-colors-picture-id501776098?k=6&m=501776098&s=612x612&w=0&h=9nGtVlPb6Cedv-T9G6h5U5kLD_goVfUcvQ1G1nb6lJk='});`"></div>
      <div class="article-overlay">
        <div class="article-content">
          <span>{{ article.publishedAt | moment("MMMM DD, YYYY") }}</span>
          <h2>{{ article.title }}</h2>
          <!-- <small>{{ article.content }}</small> -->
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-wrapper {
  position: relative;
  width: 100%;
}

.article-image {
	width: 100%;
	height: 300px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
  border-radius: 5px;
  transition: 0.3s ease-in;
}

.article .content {
  position: relative;
  bottom: 0;
  padding: 20px;
}
</style>
