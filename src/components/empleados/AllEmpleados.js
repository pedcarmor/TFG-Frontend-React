import React from 'react'
import { Link } from 'react-router-dom'

const AllEmpleados = ({empleado}) =>{
    return (
        <>
            <tbody>
                <tr>
                <td><Link to={`/api/empleados/${empleado.id}`}>{empleado.nombre}</Link></td>
                <td>{empleado.direccion}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.email}</td>
                <td>{empleado.dni}</td>
                <td>{empleado.faltas}</td>
                <td>{empleado.horario}</td>
                <td>{empleado.horasTrabajadas}</td>
                <td>{empleado.salario}</td>
                </tr>
            </tbody>
        </>
    )
}
export default AllEmpleados;