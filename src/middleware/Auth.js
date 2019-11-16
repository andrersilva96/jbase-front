import JwtTokenService from '../services/JwtToken'

export default function auth(from, to, next) {
  if (!JwtTokenService.getToken()) {
    next('/login')
  }
  next()
}
