import axios from 'axios'
import Router from 'vue-router'

class RequestService {
  getStorage(key) {
    return localStorage.getItem(key) || false
  }

  setStorage(key, value) {
    localStorage.setItem(key, value)
  }

  deleteStorage(key) {
    localStorage.removeItem(key)
  }

  async req(method, endpoint, data = null) {
    let req = await axios({
      method: method,
      url: process.env.API_DOMAIN + endpoint,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getStorage('TOKEN_KEY')
      },
      data: data
    })

    if (req.status == 401) {
      this.deleteStorage('TOKEN_KEY')
    }

    return req.data
  }
}

export default new RequestService()
