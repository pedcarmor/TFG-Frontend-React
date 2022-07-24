import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/empleados'
let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${window.sessionStorage.getItem('jwt')}`,
      "Content-Type":"application/json"
      }
    })
const getAll = () => {
    const request = reqInstance.get(baseUrl)
    return request.then(response => response.data).catch(error => {
        console.log(error)
        throw new Error('Response is NOT OK')
    })
}

const createEmpleado = ({id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario})=>{
    const request = reqInstance.post(baseUrl+"/create",
        JSON.stringify({id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario}))
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}
  
const getEmpleado = (idEmpleado) => {
    const request = reqInstance.get(`${baseUrl}/${idEmpleado}`)
    return request.then(response => response.data).catch(error => {
        console.log(error);
        throw new Error('Response is NOT OK')
    })
}

const deleteEmpleado = (idEmpleado) => {
    const request = reqInstance.delete(`${baseUrl}/${idEmpleado}/delete`)
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
    const request = reqInstance.put(`${baseUrl}/${id}/edit`,
        JSON.stringify({password,id,dni,nombre,telefono,direccion,email,horasTrabajadas,faltas,horario,salario}))
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}

export default {getAll, getEmpleado,deleteEmpleado,createEmpleado,modifyEmpleado};