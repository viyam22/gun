<template>
  <div>
    <nuxt/>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex';

export default {
  async created() {
    if (process.browser && !this.userData) {
      const { data } = await this.$get('/');
      if (data) this.$store.commit('setUserData', data);
    }
  },
  watch: {
    userData(val, oldVal) {
      if (val && val !== oldVal) {
        this.$router.push('/');
      }
    }
  },
  computed: {
    ...mapState(['userData'])
  }
}
</script>
<style type="text/css">
.container {
  padding: 20px;
}
label {
  display: block;
  margin-bottom: 20px;
}
</style>