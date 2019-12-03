// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/imports'
import firebase from 'firebase'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyCW0Xnh7IzAVRZihzkS0ecYVBHy6NhOCYs",
  authDomain: "jbase-258621.firebaseapp.com",
  databaseURL: "https://jbase-258621.firebaseio.com",
  projectId: "jbase-258621",
  storageBucket: "jbase-258621.appspot.com",
  messagingSenderId: "294926442816",
  appId: "1:294926442816:web:8f1065330a0c2ae1325aa5"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
