import React from 'react'
import { Link } from 'react-router-dom'

const AllClientes = ({cliente}) =>{
    let ivaString = ""

    if(cliente.tieneIVA===true){
        ivaString="Sí"
    }else{
        ivaString="No"
    }
    return (
        <>
            <tbody>
                <tr>
                <td><Link to={`/api/clientes/${cliente.id}`}>{cliente.nombre}</Link></td>
                <td>{cliente.direccion}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.email}</td>
                <td>{cliente.dni}</td>
                <td>{ivaString}</td>
                </tr>
            </tbody>
        </>
    )
}
export default AllClientes;