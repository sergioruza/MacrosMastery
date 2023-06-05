import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3001',
  timeout: 1000,
});
export async function createRegister({ name, email, password }) {
  const registerDB = await instance.post('/register', {name, email, password});

  return registerDB;
}

export async function loginUser({ email, password }) {
  const login = await instance.post('/login', { email, password });
  return login;
}