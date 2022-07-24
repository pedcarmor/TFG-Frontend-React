import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const AllProductos = ({producto,i}) =>{
    return (
        <>
        <div className='addProducto'>
        <Link to={`/api/products/create`} >
                    <Button variant="secondary">Añadir producto</Button>
        </Link>
        </div>  
        <Card key={i} style={{ width: '18rem' }}> 
            <Card.Body>
                <Link to={`/api/products/${producto.nombre}/edit`}>
                    <Button variant="secondary">Editar producto</Button>
                </Link>
                <Card.Title><h2>{producto.nombre}</h2></Card.Title> 
                <Card.Text><h5>{producto.precio} €</h5></Card.Text>
                <Card.Text>Actualmente en el almacén hay <h4>{producto.cantidadalmacen}</h4></Card.Text>
                <Card.Footer> Stock de seguridad: {producto.stockseguridad}</Card.Footer>
                <div className='seeProducto'>
                <Link to={`/api/products/${producto.nombre}`}>
                    <Button variant="primary">Ver producto</Button>
                </Link>
                </div>
            </Card.Body>
        </Card> 
        <br/>
        </>
    )
}
export default AllProductos;