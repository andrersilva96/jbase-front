<template>
  <div>
    <span>Login</span><br>
    <a href="#" @click="login($event)" data-provider="Google">Sign in with Google</a><br>
    <a href="#" @click="login($event)" data-provider="Facebook">Sign in with Facebook</a><br>
    <a href="#" @click="login($event)" data-provider="Github">Sign in with Github</a><br>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import RequestService from '../services/RequestService'

export default {
  name: 'Login',
  methods: {
    async login(event) {
      try {
        let provider
        switch (event.target.getAttribute('data-provider')) {
          case 'Google': provider = new firebase.auth.GoogleAuthProvider(); break
          case 'Facebook': provider = new firebase.auth.FacebookAuthProvider(); break
          case 'Github': provider = new firebase.auth.GithubAuthProvider(); break
        }
        provider.setCustomParameters({prompt: 'select_account'})
        let result = await firebase.auth().signInWithPopup(provider)
        let req = await axios({
          method: 'post',
          url: process.env.API_DOMAIN + '/login',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': await result.user.getIdToken()
          }
        })
        RequestService.setStorage('TOKEN_KEY', req.data.token)
        this.$router.push('dashboard')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
