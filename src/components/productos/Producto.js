import React, { useState ,useEffect } from 'react'
import productoService from 'services/products/producto'
import { Button } from 'react-bootstrap'
import {
    useParams, Link
  } from "react-router-dom"

const ShowProducto = () =>{
    const nombre = useParams().nombre
    const [producto, setProductos] = useState([]);

    useEffect(()=>{
    productoService.getProducto(nombre).then(producto => {
        setProductos(producto)
    })
});

    return (
        <>
        <table>
            <tbody className='tableProducto'>
                <tr><td>Nombre: {producto.nombre}</td></tr>
                <tr><td>Precio: {producto.precio}</td></tr>
                <tr><td>Cantidad en Almacén: {producto.cantidadalmacen}</td></tr>
                <tr><td>Stock Seguridad: {producto.stockseguridad}</td></tr>
            </tbody>
            <tr>
                <Link to={`/api/products/${producto.nombre}/edit`}>
                    <Button variant="secondary">Editar producto</Button>
                </Link>
            </tr>
        </table>

        <Link to={`/api/products/${producto.nombre}/delete`}>Borrar Producto</Link>

        </>
    )
}
export default ShowProducto;

