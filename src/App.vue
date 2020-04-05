<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      andre: 'sdfsdf'
    }
  }
}
</script>

<style>
body {
  background-color: #350051;
}

#app {
  margin-top: 75px;
}

input[type=text] {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #fff;
  border: none;
}

input[type=text]:focus {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.btn-outline-secondary {
  font-weight: bold;
  color: #fff;
  background-color: #6200ea;
  border-color: #6200ea;
}

.btn-outline-secondary:hover {
  background-color: #6200ea;
  border-color: #6200ea;
}

::placeholder {
  color: #fff !important;
}

.list-group .active {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: none;
}

.green {
  color: #00ED83;
}

p, a {
  font-size: 112.5%;
  margin-bottom: 0;
}

a {
  color: #00ED83;
  font-weight: 600;
}

a:hover {
  color: #54A9FF;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #181A1B;
}

::-webkit-scrollbar-thumb {
  background: #420065;
}

::-webkit-scrollbar-thumb:hover {
  background: #220033;
}
</style>
