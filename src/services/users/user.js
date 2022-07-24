import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/admin/users'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => console.log(error))
}

const createUser = ({username,password,id,dni,nombre,telefono,direccion,email})=>{
    const request = axios.post(baseUrl,
        JSON.stringify({username,password,id,dni,nombre,telefono,direccion,email}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
        
        
        /*fetch(`${baseUrl}`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({username,password,id,dni,nombre,telefono,direccion,email})
        }).then(res=>{
            if(!res.ok) throw new Error('Response is NOT OK')
            return true
        })*/
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

const modifyUser = ({username,password,id,dni,nombre,telefono,direccion,email})=>{
    const request = axios.put(`${baseUrl}/${username}/edit`,
        JSON.stringify({username,password,id,dni,nombre,telefono,direccion,email}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}


export default {getAll, getUser,deleteUser,createUser,modifyUser};