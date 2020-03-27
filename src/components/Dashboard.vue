<template>
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
      <ul class="list-group">
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
</template>

<script>
import RequestService from '../services/RequestService'

export default {
  name: 'Dashboard',
  data() {
    return {
      tables: null,
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
    },
    copyToken(event) {
      var e = event.target
      e.select()
      e.setSelectionRange(0, 99999)
      document.execCommand('copy')
      alert('token successfully copied!')
    },
    async checkForm(e)
    {
      e.preventDefault();
      let table = e.target.elements.table.value
      let req = await RequestService.req('POST', '/addTable', { table: table })
      if (req.success) {
        this.tables.push(table)
      }
      alert(req.message)
    },
    async removeTable(table) {
      let req = await RequestService.req('DELETE', '/removeTable', { table: table } )
      if (req.success) {
        let index = this.tables.indexOf(table)
        if (index > -1) this.tables.splice(index, 1)
      }
      alert(req.message)
    }
  }
}
</script>

<style scoped>
#token:hover {
  cursor: pointer;
}
</style>
