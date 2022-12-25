import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

instance.interceptors.response.use((response) => {
  return response.data
})

export const API = {
  get: <Type>(url: string) => {
    return instance.get<Type, Type>(url)
  }
}
