import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/clientes'

const getAll = async ({jwt}) => {
    const request = await axios.get(baseUrl,
        {
            headers:{
                "Authorization":"Bearer "+jwt,
                "Content-Type":"application/json"
            }
        })
    return request.then(response => response.data).catch(error => {
        console.log(error)
        throw new Error('Response is NOT OK')
    })
}

const createCliente = ({id,tieneIVA, dni,nombre,telefono,direccion,email,jwt})=>{
    const request = axios.post(baseUrl+"/create",
        JSON.stringify({id,tieneIVA,dni,nombre,telefono,direccion,email}),{
            headers:{
                "Authorization":"Bearer "+jwt,
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}
  
const getCliente = (idCliente,jwt) => {
    const request = axios.get(`${baseUrl}/${idCliente}`,
    {
        headers:{
            "Authorization":"Bearer "+jwt,
            "Content-Type":"application/json"
        }
    })
    return request.then(response => response.data).catch(error => {
        console.log(error);
        throw new Error('Response is NOT OK')
    })
}

const deleteCliente = (idCliente,jwt) => {
    const request = axios.delete(`${baseUrl}/${idCliente}/delete`,
    {
        headers:{
            "Authorization":jwt,
            "Content-Type":"application/json"
        }
    })
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

const modifyCliente = ({tieneIVA,password,id,dni,nombre,telefono,direccion,email,jwt})=>{
    const request = axios.put(`${baseUrl}/${id}/edit`,
        JSON.stringify({tieneIVA,password,id,dni,nombre,telefono,direccion,email}),{
            headers:{
                "Authorization":jwt,
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}

export default {getAll, getCliente,deleteCliente,createCliente,modifyCliente};