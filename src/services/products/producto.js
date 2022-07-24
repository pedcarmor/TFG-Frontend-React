import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/products'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const createProducto = ({nombre,precio,cantidadalmacen,stockseguridad})=>{
    return fetch(`${baseUrl}`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({nombre,precio,cantidadalmacen,stockseguridad})
    }).then(res=>{
        if(!res.ok) throw new Error('Response is NOT OK. Ha ocurrido un error al crear el producto')
        return true
    })
}

const getProducto = (nombre) => {
    const request = axios.get(`${baseUrl}/${nombre}`)
    return request.then(response => response.data)
}

const deleteProducto = (nombre) => {
    const request = axios.delete(`${baseUrl}/${nombre}/delete`)
    return request.then(response => response.data)
}

const editProducto = ({nombre,precio,cantidadalmacen,stockseguridad})=>{
    const request = axios.put(`${baseUrl}/${nombre}/edit`,
        JSON.stringify({nombre,precio,cantidadalmacen,stockseguridad}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK. Ha ocurrido un error al editar')
        })
}

export default {getAll, createProducto, getProducto,deleteProducto, editProducto};