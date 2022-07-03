import { useState ,useEffect } from 'react'
import productoService from 'services/products/producto'
import {
    useParams, Route, Navigate
  } from "react-router-dom"

const DeleteProducto = () =>{
    const nombre = useParams().nombre
    const [producto, setProductos] = useState([]);

    useEffect(()=>{
    productoService.deleteProducto(nombre).then(producto => {
        setProductos(null)
    })
});

    <Route path="/api/products/:nombre/delete" render={() =>
    <Navigate  to="/api/products" replace />
} ></Route>

}
export default DeleteProducto;