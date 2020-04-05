<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-light"> <!--  -->
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#buttonToggle">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="buttonToggle">
      <div class="navbar-nav ml-auto">
          <a href="https://documenter.getpostman.com/view/10880762/SzYW315A" target="_blank" class="nav-item nav-link">Documentation</a>
          <router-link to="/login" tag="a" class="nav-item nav-link">
            <span v-if="!this.token" v-on:click="logout()">Login</span>
            <span v-else v-on:click="logout()">Logout</span>
          </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import RequestService from '@/services/RequestService'
import Event from '@/services/Event'

export default {
  data() {
    return {
      token: RequestService.getStorage('TOKEN_KEY'),
    }
  },
  mounted() {
    Event.on('token', (token) => this.token = token)
  },
  methods: {
    logout() {
      RequestService.deleteStorage('TOKEN_KEY')
      Event.emit('token', null)
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #350051 !important;
}
nav a {
  color: #00ED83 !important;
  font-weight: 600 !important;
}

nav a:hover {
  color: #54A9FF !important;
  text-decoration: none !important;
}

</style>
