<template>
  <section class="container">
    <div>
      <div v-if="userData">
        <span>{{userData.nickname}}</span>
        <a @click="signout" href="javascript:void(0);">登出</a>
      </div>
      <div v-else>
        <nuxt-link to="/sign/in">登录</nuxt-link>
        <nuxt-link to="/sign/up">注册</nuxt-link>
        
      </div>
      <div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

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
    async signout() {
      const { data } = await this.$get('/signout')

      if (data.msg.success) {
        this.$store.commit('setUserData', null);
      }
    }
  },
  computed: {
    ...mapState(['userData'])
  }
};
</script>

<style>
</style>
