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

export default {
  name: 'Login',
  methods: {
    async login(event) {
      let provider
      switch (event.target.getAttribute('data-provider')) {
        case 'Google': provider = new firebase.auth.GoogleAuthProvider()
        case 'Facebook': provider = new firebase.auth.FacebookAuthProvider()
        case 'Github': provider = new firebase.auth.GithubAuthProvider()
      }
      provider.setCustomParameters({prompt: 'select_account'})
      let result = await firebase.auth().signInWithPopup(provider)
      let idToken = await result.user.getIdToken()
      console.log(idToken)
    }
  }
}
</script>

<style scoped>

</style>
