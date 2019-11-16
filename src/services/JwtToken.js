class JwtTokenService {
  getToken() {
    return window.localStorage['TOKEN_KEY'] || false
  }

  setToken(value) {
    window.localStorage['TOKEN_KEY'] = value
  }
}

export default new JwtTokenService()
