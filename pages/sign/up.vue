<template>
  <div>
    <h1>注册</h1>
    <div>
    <label>用户名：<input type="text" placeholder="用户名" v-model="nickname" name=""></label>
    <label>邮箱：<input type="text" placeholder="邮箱" v-model="email" name=""></label>
    <label>邮箱验证码：<input type="text" placeholder="邮箱验证码" v-model="emailCode" name=""></label>
    <label>密码：<input type="password" placeholder="密码" v-model="password" name=""></label>
    <button @click="signup">注册</button>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      nickname: '',
      password: '',
      email: '',
      emailCode: ''
    }
  },
  methods: {  
    async signup() {
      const { data } = await this.$post('/signup', {
        nickname: this.nickname,
        email: this.email,
        emailCode: this.emailCode,
        password: this.password
      })
      if (data.msg.success) {
        this.$store.commit('setUserData', data.userData);
      }
    }
  }
}
</script>