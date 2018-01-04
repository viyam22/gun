<style>
.news-container {
  width: 50%;
  margin: 0 auto;
  padding-top: 10px;
}
@media (max-width: 768px) {
  .news-container {
    width: 100%;
  }
}
</style>

<template>
  <div class="news-container">
    <news-list></news-list>
    <!-- <div class="news-list">
      <h1 class="news-title">新闻题目</h1>
      <p class="news-detail">新闻描述</p>
      <img src="" class="news-img">
    </div> -->
  </div>
</template>

<script>
import newsList from '~/components/newsList.vue';

export default {
  components: { newsList },
  layout: 'page',
  validate({ params, query }) {
    console.log(params);
    
    return true;
  }
};
</script>
