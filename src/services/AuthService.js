import api from './api'

class AuthService {
  async register(name, email, password, passwordConfirmation) {
    return api.post('/api/register', {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }).then(res => res.data);
  }

  async login(email, password) {
    return api.post('/api/login', {
      email,
      password,
    }).then(res => res.data);
  }

  logout() {
    return api.post('/api/logout').then(res => res.data);
  }
}

export default new AuthService();
