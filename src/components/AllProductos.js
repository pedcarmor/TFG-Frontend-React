import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const AllProductos = ({producto,i}) =>{
    return (
        <>
        <Card key={i} style={{ width: '18rem' }}> 
            <Card.Body>
                <Card.Title><h2>{producto.nombre}</h2></Card.Title> 
                <Card.Text><h5>{producto.precio} €</h5></Card.Text>
                <Card.Text>Actualmente en el almacén hay <h4>{producto.cantidadalmacen}</h4></Card.Text>
                <Card.Footer> Stock de seguridad: {producto.stockseguridad}</Card.Footer>

               
                <Link to={`/api/products/${producto.nombre}`}>
                    <Button variant="primary">Ver producto</Button>
                </Link>

            </Card.Body>
        </Card> 
        </>
    )
}
export default AllProductos;