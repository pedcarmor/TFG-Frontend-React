import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/products'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const getProducto = (nombre) => {
    const request = axios.get(`${baseUrl}/${nombre}`)
    return request.then(response => response.data)
}

const deleteProducto = (nombre) => {
    const request = axios.delete(`${baseUrl}/${nombre}/delete`)
    return request.then(response => response.data)
}

export default {getAll, create, getProducto,deleteProducto};