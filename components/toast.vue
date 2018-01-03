<style>
.toast {
  width: 100%;
  color: #fff;
  height: 40px;
  line-height: 40px;
  z-index: 100;
  position: fixed;
  top: 0;
  text-align: center;
  font-size: 12px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .50s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 769px) {
  .toast {
    width: 50%;
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
}
</style>

<template>
<toast>
  <transition name="fade">
    <div class="toast" :style="{ backgroundColor: toastBgColor }" v-show="toast.isShow">
      {{ toast.msg }}
    </div>
  </transition>
</toast>
</template>

<script>
export default {
  data () {
    return {
      // toast场景对应值要抽出来，规定统一编码
      toastScenes: {
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        info: '#909399'
      },
      toastBgColor: ''
    }
  },
  props: ['toast', 'isShowToast'],
  mounted () {
    this.toastBgColor = this.toastScenes[this.toast.type];
  }
};
</script>
