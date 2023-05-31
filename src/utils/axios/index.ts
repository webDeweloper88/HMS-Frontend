import axios from 'axios'


export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const hmsApi = axios.create({
  baseURL: 'http://localhost:3000/bemor/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
export const departments = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const departmentCreate = axios.create({
  baseURL: 'http://localhost:3000/departments',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
export const doctorCreate = axios.create({
  baseURL: 'http://localhost:3000/doctors',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const IndeksAll = axios.create({
  baseURL: 'http://localhost:3000/indeks',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

