<template>
  <div class="container">
    <div class="row">
      <div class="mx-auto media">
        <h2>Login</h2>
        <button type="button" id="google" @click="login($event)" data-provider="Google">
          <i class="fab fa-google"></i>
          Sign in with Google
        </button>
        <button type="button" id="fb" @click="login($event)" data-provider="Facebook">
          <i class="fab fa-facebook-square"></i>
          Sign in with Facebook
        </button>
        <button type="button" id="github" @click="login($event)" data-provider="Github">
          <i class="fab fa-github"></i>
          Sign in with Github
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../services/FirebaseApp'
import axios from 'axios'
import RequestService from '../services/RequestService'
import Event from '@/services/Event'

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
        Event.emit('token', req.data.token)
        this.$router.push('dashboard')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

.media {
  text-align: center;
  padding: 15vh 0vh;
  display: grid;
  width: 300px;
}

.media h2 {
  color: #fff;
  margin-bottom: 20px;
}

.media button {
  border: none;
  margin: 5px 0;
  padding: 10px 0;
  color: #fff;
}

.media span {
  padding: 10vh 0;
}

#google {
  background-color: #ea4335;
}
#fb {
  background-color: #385499;
}
#github {
  background-color: #2f3337;
}

</style>
