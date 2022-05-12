import React, { useState ,useEffect } from 'react'
import empleadoService from 'services/empleados/empleado'
import Table  from 'react-bootstrap/Table'

import {
    useParams,Link
  } from "react-router-dom"
import { Button } from 'react-bootstrap'

const ShowEmpleado = () =>{    
    

    const id = useParams().id
    const [empleado, setEmpleado] = useState([]);
    

    useEffect(()=>{
    empleadoService.getEmpleado(id).then(empleado => {
        setEmpleado(empleado)
    })
},[]);
    return (
        <>
        <div>
        <h1>Detalle del cliente</h1>
        <Table bordered hover size="sm" responsive>
            <tbody>
                <tr><th scope="col">Nombre</th>
                    <td>{empleado.nombre}</td></tr>
                <tr><th scope="col">Dirección</th>
                    <td>{empleado.direccion}</td></tr>
                <tr><th scope="col">Teléfono</th>
                    <td>{empleado.telefono}</td></tr>
                <tr><th scope="col">Email</th>
                    <td>{empleado.email}</td></tr>
                <tr><th scope="col">DNI</th>
                    <td>{empleado.dni}</td></tr>
                <tr><th scope="col">Faltas</th>
                    <td>{empleado.faltas}</td></tr>
                <tr><th scope="col">Horario</th>
                    <td>{empleado.horario}</td></tr>
                <tr><th scope="col">Horas trabajadas</th>
                    <td>{empleado.horasTrabajadas}</td></tr>
                <tr><th scope="col">Salario</th>
                    <td>{empleado.salario}</td></tr>
            </tbody>
        </Table>
        <Button variant="outline-primary" onClick={()=> empleadoService.deleteEmpleado(id)}
        href="/api/empleados">Eliminar
        </Button>
        <Link to={`/api/empleados/${empleado.id}/edit`} className="btn btn-primary">Editar</Link>
        </div>
        </>
    )
}
export default ShowEmpleado;