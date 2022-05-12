import React, { useState ,useEffect } from 'react'
import clienteService from 'services/clientes/cliente'
import Table  from 'react-bootstrap/Table'

import {
    useParams,Link
  } from "react-router-dom"
import { Button } from 'react-bootstrap'

const ShowCliente = () =>{    
    

    const id = useParams().id
    const [cliente, setCliente] = useState([]);
    

    useEffect(()=>{
    clienteService.getCliente(id).then(cliente => {
        setCliente(cliente)
    })
},[]);

    let ivaString = ""
    if(cliente.tieneIVA===true){
        ivaString="Sí"
    }else{
        ivaString="No"
    }
    
    return (
        <>
        <div>
        <h1>Detalle del cliente</h1>
        <Table bordered hover size="sm" responsive>
            <tbody>
                <tr><th scope="col">Nombre</th>
                    <td>{cliente.nombre}</td></tr>
                <tr><th scope="col">Dirección</th>
                    <td>{cliente.direccion}</td></tr>
                <tr><th scope="col">Teléfono</th>
                    <td>{cliente.telefono}</td></tr>
                <tr><th scope="col">Email</th>
                    <td>{cliente.email}</td></tr>
                <tr><th scope="col">DNI</th>
                    <td>{cliente.dni}</td></tr>
                    <tr><th scope="col">¿Tiene IVA?</th>
                    <td>{ivaString}</td></tr>
            </tbody>
        </Table>
        <Button variant="outline-primary" onClick={()=> clienteService.deleteCliente(id)}
        href="/api/clientes">Eliminar
        </Button>
        <Link to={`/api/admin/clientes/${cliente.id}/edit`} className="btn btn-primary">Editar</Link>
        </div>
        </>
    )
}
export default ShowCliente;