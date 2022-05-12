import React from 'react'
import EmpleadosView from './empleadosTable';
import {Link} from "react-router-dom"
const Empleados = () => {

return (
    <>
    <div className='container'>
    <EmpleadosView></EmpleadosView>
    <Link to={`/api/empleados/create`} className="btn btn-primary">Añadir empleado</Link>
    </div>
    </>
)
}
export default Empleados;