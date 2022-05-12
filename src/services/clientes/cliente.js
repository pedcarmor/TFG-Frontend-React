import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/clientes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => {
        console.log(error)
        throw new Error('Response is NOT OK')
    })
}

const createCliente = ({id,tieneIVA, dni,nombre,telefono,direccion,email})=>{
    const request = axios.post(baseUrl+"/create",
        JSON.stringify({id,tieneIVA,dni,nombre,telefono,direccion,email}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}
  
const getCliente = (idCliente) => {
    const request = axios.get(`${baseUrl}/${idCliente}`)
    return request.then(response => response.data).catch(error => {
        console.log(error);
        throw new Error('Response is NOT OK')
    })
}

const deleteCliente = (idCliente) => {
    const request = axios.delete(`${baseUrl}/${idCliente}/delete`)
    return request.then(
        function(response){
            console.log(response.data);
            getAll()
        }
    ).catch(error => {
        console.log(error)
        throw new Error('Response is NOT OK')
    })
}

const modifyCliente = ({tieneIVA,password,id,dni,nombre,telefono,direccion,email})=>{
    const request = axios.put(`${baseUrl}/${id}/edit`,
        JSON.stringify({tieneIVA,password,id,dni,nombre,telefono,direccion,email}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}

export default {getAll, getCliente,deleteCliente,createCliente,modifyCliente};