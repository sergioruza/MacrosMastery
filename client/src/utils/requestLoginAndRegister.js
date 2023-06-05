import axios from 'axios';

export async function createRegister({ name, email, password }) {
  const registerDB = await axios.post('/register', {name, email, password});

  return registerDB
}

export async function loginUser({ email, password }) {
  const login = await axios.post('/login', { email, password })
  return login
}