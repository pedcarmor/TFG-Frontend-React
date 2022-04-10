import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/admin/users'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
  
const getUser = (username) => {
    const request = axios.get(`${baseUrl}/${username}`)
    return request.then(response => response.data)
}

const deleteUser = (username) => {
    const request = axios.delete(`${baseUrl}/${username}/delete`)
    return request.then(response => response.data)
}
  
export default {getAll, create, getUser,deleteUser};