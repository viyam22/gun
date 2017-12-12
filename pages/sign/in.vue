<template>
  <div>
    <h1>登录</h1>
    <div>
      <label>账号：<input type="text" v-model="nickname" placeholder="用户名或邮箱" name=""></label>
      <label>密码：<input type="password" v-model="password" placeholder="密码" name=""></label>
      <button @click="signin">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'sign',
  data() {
    return {
      nickname: '',
      password: '',
      email: ''
    }
  },
  methods: {
    async signin() {
      const { data } = await this.$post('/signin', {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      })

      if (data.msg.success) {
        this.$store.commit('setUserData', data.userData);
      }
    }
  }
}
</script>