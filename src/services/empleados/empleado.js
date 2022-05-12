import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/empleados'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch(error => {
        console.log(error)
        throw new Error('Response is NOT OK')
    })
}

const createEmpleado = ({id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario})=>{
    const request = axios.post(baseUrl+"/create",
        JSON.stringify({id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}
  
const getEmpleado = (idEmpleado) => {
    const request = axios.get(`${baseUrl}/${idEmpleado}`)
    return request.then(response => response.data).catch(error => {
        console.log(error);
        throw new Error('Response is NOT OK')
    })
}

const deleteEmpleado = (idEmpleado) => {
    const request = axios.delete(`${baseUrl}/${idEmpleado}/delete`)
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

const modifyEmpleado = ({password,id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario})=>{
    const request = axios.put(`${baseUrl}/${id}/edit`,
        JSON.stringify({password,id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}

export default {getAll, getEmpleado,deleteEmpleado,createEmpleado,modifyEmpleado};