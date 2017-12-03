import axios from 'axios';
import Vue from 'vue';

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(get|head|options|trace)$/.test(method));
}

function getToken() {
  //temporarily!need to be modified.
  return document.cookie.split('=')[1];
}

axios.defaults.baseURL = 'http://api.gun.com';
axios.defaults.withCredentials = true;

for (let method in axios.defaults.headers) {
  if (process.browser && !csrfSafeMethod(method) && method !== 'common') {
    axios.defaults.headers[method]['x-csrf-token'] = getToken();
  }
}

Vue.mixin({
  computed: {
    $axios () {
      return axios;
    }
  },
  methods: {
    $get(url, opts) {
      return axios.get(url, opts);
    },
    $post (url, data, opts) {
      return axios.post(url, data, opts);
    }
  }
});
