<template>
  <div id="alert" v-bind:class="'alert-'+type" class="alert alert-dismissible fade" role="alert">
    <strong>{{type | capitalize}}!</strong> {{msg}}
    <button type="button" class="close" @click="close()">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
import Event from '@/services/Event'

export default {
  name: 'Alert',
  data() {
    return {
      type: 'success',
      msg: ''
    }
  },
  mounted() {
    Event.on('alert', (data) => {
      this.type = data.success ? 'success': 'danger'
      this.msg = data.message

      let e = document.getElementById('alert')
      e.classList.add('show')
      e.style.zIndex = 10
      setTimeout(() => {
        e.classList.remove('show')
        e.style.zIndex = 0
      }, 3500);
    })
  },
  methods: {
    close() {
      let e = document.getElementById('alert')
      e.classList.remove('show')
      e.style.zIndex = 0
    }
  }
}
</script>

<style>
.alert {
  width: 350px;
  height: inherit !important;
  padding: 22px 20px;
  border: none;
  border-radius: 0;
  color: #fff;

  position: absolute;
  z-index: 0;
  right: 4rem;
}
.alert-dismissible .close {
  padding: inherit;
  color: inherit;
}

.alert-dismissible .close:focus {
  outline: none;
}
.alert-success {
  background-color: #00c853;
}
.alert-danger {
  background-color: #ff1744;
}
</style>
