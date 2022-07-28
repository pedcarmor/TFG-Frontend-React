import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/products'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const createProducto = ({nombre,precio,cantidadalmacen,stockseguridad})=>{
    const request = axios.post(`${baseUrl}/create`,
        JSON.stringify({nombre,precio,cantidadalmacen,stockseguridad}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK. Ha ocurrido un error al crear')
        })
}

const getProducto = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw new Error("Response is NOT OK");
    });
}

const deleteProducto = (id) => {
    const request = axios.delete(`${baseUrl}/${id}/delete`)
    return request.then(function (response) {
        console.log(response.data);
        getAll();
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Response is NOT OK");
      });
}

const editProducto = ({id,nombre,precio,cantidadalmacen,stockseguridad})=>{
    const request = axios.put(`${baseUrl}/${id}/edit`,
        JSON.stringify({id,nombre,precio,cantidadalmacen,stockseguridad}),{
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