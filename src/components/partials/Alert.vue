<template>
  <div id="alert" class="alert alert-dismissible fade" role="alert">
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
      type: '',
      msg: ''
    }
  },
  mounted() {
    Event.on('alert', (data) => {
      this.type = data.type
      this.msg = data.message

      let e = document.getElementById('alert')
      e.classList.add('show')
      e.classList.add(`alert-${data.type}`)
      e.style.zIndex = 10

      setTimeout(() => {
        e.classList.remove('show')
        e.classList.remove(`alert-${data.type}`)
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

.alert-success {
  background-color: #00c853;
}
.alert-danger {
  background-color: #ff1744;
}
.alert-warning {
  background-color: #ff9100;
}
.alert-info {
  background-color: #00b0ff;
}
.alert-primary {
  background-color: #6200ea;
}
</style>
