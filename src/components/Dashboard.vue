<template>
  <div class="row">
    <div class="col-12">
      <span>Dashboard</span>
    </div>
    <div class="col-6">
      <form @submit="checkForm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="table" v-model="tables" pattern="[a-z_]+" maxlength="15" placeholder="Please type at least 15 characters underscore." title="Please type at least 15 characters underscore." required>
          <div class="input-group-append">
            <button @click="getHash()" class="btn btn-primary btn-outline-secondary">Add Table</button>
          </div>
        </div>
      </form>
      <ul class="list-group">
        <li class="list-group-item active">Your tables</li>
        <li v-for="(table, id) in tables" :key="id" class="list-group-item">
          {{ table }}
          <button v-bind:id="id" type="button" class="close" title="Remove table">
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="col-6">
      <div class="input-group mb-3">
        <input v-model="hash" @click="copyHash($event)" type="text" id="hash" class="form-control" placeholder="Please click the button on the right!" readonly>
        <div class="input-group-append">
          <button @click="getHash()" class="btn btn-primary btn-outline-secondary">Generate</button>
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
      tables: null,
      hash: null
    }
  },
  async mounted() {
    let user = await RequestService.req('GET', '/user')
    this.tables = user.data.tables
    this.hash = user.data.apiHash ? user.data.apiHash : null;
  },
  methods: {
    async getHash() {
      let req = await RequestService.req('GET', '/generateHash')
      this.hash = req.token
    },
    copyHash(event) {
      var e = event.target
      e.select()
      e.setSelectionRange(0, 99999)
      document.execCommand('copy')
      alert('Hash successfully copied!')
    },
    async checkForm(e)
    {
      e.preventDefault();
      let req = await RequestService.req('POST', '/addTable', {
        tables: this.tables
      })

      alert(req.message)
    }
  }
}
</script>

<style scoped>
#hash:hover {
  cursor: pointer;
}
</style>
