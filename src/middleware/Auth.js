import RequestService from '../services/RequestService'

export default function auth(from, to, next) {
  if (!RequestService.getStorage('TOKEN_KEY')) {
    next('/login')
  }
  next()
}
