<style>
.header {
  width: 100%;
  height: 60px;
  padding: 10px;
  line-height: 40px;
  border-bottom: 1px solid #DCDFE6;
  font-size: 16px;
  position: fixed;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.1);
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
}
.logo {
  float: left;

}
.status {
  float: right;
}
.nickname {
  margin: 0 10px;
  float: right;
}
.search-input {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 30px;
}
.search-input input {
  width: 170px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  padding: 0 5px 0 25px;
  border-radius: 15px;
  border: 1px solid #DCDFE6;
}
::-webkit-input-placeholder, .search-input i {
   color: #909399;
}
.search-input i {
  position: absolute;
  z-index: 1;
  line-height: 30px;
  left: 5px;
}
.main {
  margin-top: 60px;
}
</style>

<template>
  <div>
    <div class="header">
      <div class="logo">GUN</div>
      <nuxt-link to=""><i class="iconfont icon-editor"></i>编辑</nuxt-link>
      <div class="search-input">
        <i class="iconfont icon-search"></i>
        <input type="" name="" placeholder="搜索">
      </div>
      <nuxt-link to="/sign/in" class="status">SIGN OUT</nuxt-link>
      <div class="nickname">小仙女</div>
    </div>

    <back-to-top></back-to-top>
    <toast :toast="toast" :isShowToast="isShowToast"></toast>

    <div class="main" @click="showToast">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import backToTop from '~/components/backToTop.vue';
import toast from '~/components/toast.vue';


export default {
  components: { toast, backToTop },
  data () {
    return {
      toast: {
        msg: '对不起，你没有这个权限！',
        type: 'danger',
        isShow: false
      },
      isShowToast: false
    }
  },
  methods: {
    showToast() {
      this.toast.isShow = true;
      setTimeout(() => {
        this.toast.isShow = false;
      }, 1500);
    }
  }
};
</script>
