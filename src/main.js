import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import * as fb from 'firebase'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
  created (){
    fb.initializeApp({
      apiKey: 'AIzaSyCyps5obX1V9M6AO4VUM2R8svW1iYp5GOI',
      authDomain: 'itc-ads-c4087.firebaseapp.com',
      databaseURL: 'https://itc-ads-c4087.firebaseio.com',
      projectId: 'itc-ads-c4087',
      storageBucket: 'itc-ads-c4087.appspot.com',
      messagingSenderId: '801510639075',
      appId: '1:801510639075:web:d148ba2cbe7dd80d'
    })
  }
}).$mount('#app')
