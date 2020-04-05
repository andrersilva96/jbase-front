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
