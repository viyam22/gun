<style>
.to-top-btn {
  width: 50px;
  height: 50px;
  line-height: 48px;
  border: 1px solid #DCDFE6;
  position: fixed;
  bottom: 60px;
  right: 50px;
  color: #DCDFE6;
  text-align: center;
}
</style>

<template>
<back-to-top>
  <a class="to-top-btn" href="#" v-show="isBtnShow">
    <i class="iconfont icon-jiantoushang"></i>
  </a>
</back-to-top>
</template>

<script>
export default {
  data () {
    return {
      isBtnShow: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      var scollTop = window.scrollY;
      if (scollTop >= 60) {
        this.isBtnShow = true;
      } else {
        this.isBtnShow = false;
      }
    }
  }
};
</script>
