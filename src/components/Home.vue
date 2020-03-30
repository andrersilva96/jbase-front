<template>
  <div>
    <div class="fullscreen">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="brand">
              <h1>JBase</h1>
              <h5 class="text-uppercase mb-5">
                A FREE Web Database and API for Developers
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="description">
      <div class="row">

        <div class="col-lg-4 text-center">
            <i class="fas fa-code fa-4x"></i>
            <p>It abstracts much of the Database and API to be able to learn new frontend or development projects.</p>
        </div>

        <div class="col-lg-4 text-center">
          <i class="fas fa-database fa-4x"></i>
          <p>You already have your tables with CRUD to develop your projects for FREE.</p>
        </div>

        <div class="col-lg-4 text-center">
            <i class="fas fa-book fa-4x"></i>
            <p>Documentation that follows good programming practices to encourage good use and easy understanding.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullscreen {
  height: 100vh;
  /* background-image: url("~@/assets/img/bg2.jpg"); */
  min-height: 300px;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.brand {
  margin-top: 40vh;
  color: #00ED83;
  text-align: center;
}
.brand h1 {
  font-size: 4.5em;
  font-weight: 800;
}
#description .row {
  padding-bottom: 70px;
}
#description i {
  color: #00ED83;
  margin: 40px 0;
}
@media (max-width: 768px) {
  .brand h1 {
    font-size: 2.5em;
  }
}
</style>
