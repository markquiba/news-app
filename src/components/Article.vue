<template>
  <a class="article-hlink" :href="article.url" target="_blank">
    <div class="article-wrapper">
      <div :v-if="article.urlToImage != null" class="article-image" :style="`background-image: url(${ (article.urlToImage != null) ? article.urlToImage : 'https://media.istockphoto.com/photos/abstract-blurred-background-image-with-beautiful-colors-picture-id501776098?k=6&m=501776098&s=612x612&w=0&h=9nGtVlPb6Cedv-T9G6h5U5kLD_goVfUcvQ1G1nb6lJk='});`"></div>
      <div class="article-overlay">
        <div class="article-content">
          <span>{{ article.publishedAt | moment("MMMM DD, YYYY") }}</span>
          <h2>{{ article.title }}</h2>
          <small>{{ article.content }}</small>
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
  overflow: hidden;
  transition: 0.3s ease-in;
}

.article-overlay {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  -webkit-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
  -o-transition: all .3s ease-in;
  transition: all .3s ease-in;
}

.article-hlink:hover .article-overlay {
  background-color: rgba(0, 0, 0, 0);
}

.article-content small {
  display: none;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

.article-hlink:hover .article-content small {
  display: block;
}

.article-content {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 25px;
  background: -moz-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to top, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}

</style>
