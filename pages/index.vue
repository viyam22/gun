<template>
  <section class="container">
    <div>
      <logo/>
      <div>
        <div>
          <label>用户名：<input type="text" placeholder="用户名" v-model="nickname" name=""></label>
          <label>邮箱：<input type="text" placeholder="邮箱" v-model="email" name=""></label>
          <label>邮箱验证码：<input type="text" placeholder="邮箱验证码" v-model="emailCode" name=""></label>
          <label>密码：<input type="password" placeholder="密码" v-model="password" name=""></label>
          <button @click="signup">注册</button>
        </div>
        <div>
          <label>账号：<input type="text" v-model="nickname" placeholder="用户名或邮箱" name=""></label>
          <label>密码：<input type="password" v-model="password" placeholder="密码" name=""></label>
          <button @click="signin">登录</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async mounted() {
    const { data } = await this.$get('/')
    console.log(data);
  },
  data() {
    return {
      nickname: '',
      password: '',
      email: '',
      emailCode: ''
    }
  },
  methods: {
    async signin() {
      const { data } = await this.$axios.post('/signin', {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      })

      console.log(data);
    },
    async signup() {
      const { data } = await this.$post('/signup', {
        nickname: this.nickname,
        email: this.email,
        emailCode: this.emailCode,
        password: this.password
      })
      console.log(data);
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  padding: 20px;
}
label {
  display: block;
  margin-bottom: 20px;
}
</style>
