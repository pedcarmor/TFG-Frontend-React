import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import FormProducto from 'components/FormProducto'

import {
    BrowserRouter as Router,
    Route,Routes
} from "react-router-dom"

const AllProductos = ({producto,i}) =>{
    return (
        <>
        <div>
        <h3>Añadir Producto</h3>
        <Router>
            <Routes>
                <Route path="/api/products/create" element={<FormProducto/>} />
            </Routes>
        </Router>
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

               
                <Link to={`/api/products/${producto.nombre}`}>
                    <Button variant="primary">Ver producto</Button>
                </Link>

            </Card.Body>
        </Card> 
        </>
    )
}
export default AllProductos;