import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from 'hooks/useUser'

const AllEmpleados = ({empleado}) =>{

    const {isLogged} = useUser()
    let navigate = useNavigate()
    useEffect(()=>{
        if(!isLogged) navigate("/login",{ replace: true })
    },[isLogged,navigate]);
    return (
        <>
            <tbody>
                <tr className='hover-row'>
                <td><Link className='row-link' to={`/empleados/${empleado.id}`}>{empleado.nombre}</Link></td>
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