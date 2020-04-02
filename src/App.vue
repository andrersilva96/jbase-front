<template>
  <div id="app">
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #350051;
}

.green {
  color: #00ED83;
}

p, span, a {
  font-size: 112.5%;
  margin-bottom: 0;
}

a {
  font-weight: 600
}

a:hover {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #420065;
}

::-webkit-scrollbar-thumb:hover {
  background: #220033;
}
</style>
