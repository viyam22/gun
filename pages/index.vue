<template>
  <section class="container">
    <div>
      <div v-if="userData">
        <p>{{userData.nickname}}</p>
      </div>
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
import { mapState } from 'vuex';

export default {
  async created() {
    if (process.browser && !this.userData) {
      const { data } = await this.$get('/');
      if (data) this.$store.commit('setUserData', data);
    }
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
      const { data } = await this.$post('/signin', {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      })

      if (data.msg.success) {
        this.$store.commit('setUserData', data.userData);
      }
    },
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
  },
  computed: {
    ...mapState(['userData'])
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
