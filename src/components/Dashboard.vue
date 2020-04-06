<template>
  <div class="container">
    <alert></alert>

    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <input v-model="token" @click="copyToken($event)" type="text" id="token" class="form-control" placeholder="Please click the button on the right!" readonly>
          <div class="input-group-append">
            <button @click="getToken()" class="btn btn-primary btn-outline-secondary">Generate</button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <form @submit="checkForm">
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="table" name="table" pattern="[a-z_]+" maxlength="15" placeholder="Please type at least 15 characters or with underscore." title="Please type at least 15 characters or with underscore." required>
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary btn-outline-secondary">Add Table</button>
            </div>
          </div>
        </form>
        <ul v-if="tables.length" class="list-group">
          <li class="list-group-item active">Your tables</li>
          <li v-for="(table) in tables" :key="table" class="list-group-item">
            {{ table }}
            <button @click="removeTable(table)" type="button" class="close" title="Remove table">
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RequestService from '../services/RequestService'
import Event from '@/services/Event'

export default {
  name: 'Dashboard',
  data() {
    return {
      tables: [],
      token: null
    }
  },
  async mounted() {
    let user = await RequestService.req('GET', '/user')
    this.tables = user.data.tables
    this.token = user.data.apiToken ? user.data.apiToken : null;
  },
  methods: {
    async getToken() {
      let req = await RequestService.req('GET', '/generateToken')
      this.token = req.token
      Event.emit('alert', {success: req.success, message: 'Token generated!'})
    },
    copyToken(event) {
      var e = event.target
      e.select()
      e.setSelectionRange(0, 99999)
      document.execCommand('copy')
      Event.emit('alert', {success: true, message: 'Token copied!'})
    },
    async checkForm(e)
    {
      e.preventDefault();
      let table = e.target.elements.table.value
      let req = await RequestService.req('POST', '/addTable', { table: table })
      if (req.success) {
        this.tables.push(table)
      }
      document.getElementById('table').value = ''
      Event.emit('alert', req)
    },
    async removeTable(table) {
      let req = await RequestService.req('DELETE', '/removeTable', { table: table } )
      if (req.success) {
        let index = this.tables.indexOf(table)
        if (index > -1) this.tables.splice(index, 1)
      }
      Event.emit('alert', req)
    }
  }
}
</script>

<style>
#token:hover {
  cursor: pointer;
}

.btn-outline-secondary {
  width: 100px;
}
</style>
