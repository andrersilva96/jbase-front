<template>
  <div class="row">
    <div class="col-12">
      <span>Dashboard</span>
    </div>
    <div class="col-6">
      list
    </div>
    <div class="col-6">
      <div class="input-group mb-3">
        <input v-model="hash" @click="copyHash($event)" type="text" id="hash" class="form-control" readonly>
        <div class="input-group-append">
          <button @click="getHash()" class="btn btn-outline-secondary">Generate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestService from '../services/RequestService'

export default {
  name: 'Dashboard',
  data() {
    return {
      hash: 'Please click the button on the right!'
    }
  },
  mounted() {
    if (RequestService.getStorage('HASH')) {
      this.hash = RequestService.getStorage('HASH');
    }
  },
  methods: {
    async getHash() {
      let req = await RequestService.req('GET', '/generateHash')
      RequestService.setStorage('HASH', req.token)
      this.hash = req.token
    },
    copyHash(event) {
      var e = event.target
      e.select()
      e.setSelectionRange(0, 99999)
      document.execCommand('copy')
      alert('Hash successfully copied!')
    }
  }
}
</script>

<style scoped>
#hash:hover {
  cursor: pointer;
}
</style>
