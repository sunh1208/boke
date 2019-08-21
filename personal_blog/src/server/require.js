import axios from 'axios';

let request = axios.create({
    baseURL: process.env.NODE_ENV !== "production" ? "/api" : ""
})

request.interceptors.request.use((config) => {
    config.headers.authorization = 89000
    return config
}, (error) => {
    return Promise.reject(error)
})
request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export let get = (url, params) => { return request.get(url, { params }) }
export let post = (url, data) => request.post(url, { ...data })
export let deletes = (url, data) => request.delete(url, { data })
export let put = (url, data) => request.put(url, { ...data })




