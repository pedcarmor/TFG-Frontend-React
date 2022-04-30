import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/admin/users'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => console.log(error))
}

const createUser = async (userData)=>{
        const formData = new FormData()
        formData.append('nombre', userData.nombre)
        formData.append('username', userData.username)
        formData.append('password', userData.password)
        formData.append('direccion', userData.direccion)
        formData.append('dni', userData.dni)
        formData.append('email', userData.email)
        formData.append('telefono', userData.telefono)
        const value = Object.fromEntries(formData.entries());
        console.log(value);
        const response = await axios.post(baseUrl,value)
        return response.then(responses => console.log(responses.data))
        .catch(error => console.log(error))
}
  
const getUser = (username) => {
    const request = axios.get(`${baseUrl}/${username}`)
    return request.then(response => response.data).catch(error => console.log(error))
}

const deleteUser = (username) => {
    const request = axios.delete(`${baseUrl}/${username}/delete`)
    return request.then(
        function(response){
            console.log(response.data);
            getAll()
        }
    ).catch(error => console.log(error))}

export default {getAll, getUser,deleteUser,createUser};