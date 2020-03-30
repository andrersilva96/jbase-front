<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background-color: #350051;
}

p {
  color: #fff;
  font-size: 112.5%;
  margin-bottom: 0;
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
