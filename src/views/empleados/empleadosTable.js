import AllEmpleados from 'components/empleados/AllEmpleados'
import Table  from 'react-bootstrap/Table'
import empleadoService from 'services/empleados/empleado'
import React, { useState ,useEffect } from 'react'
const EmpleadosView = () => {

    const [empleados, setEmpleados] = useState([])
    useEffect(()=>{
        empleadoService.getAll().then(initialEmpleados => {
            setEmpleados(initialEmpleados)
        })
    },[]);
return(
    <>
    <h1>Empleados</h1>
        <Table bordered hover>
        <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col">DNI</th>
                <th scope="col">Faltas</th>
                <th scope="col">Horario</th>
                <th scope="col">Horas trabajadas</th>
                <th scope="col">Salario</th>
                </tr>
            </thead>
        {empleados.map((empleado, i) => 
          <AllEmpleados
          key={i}
          empleado={empleado}>
          </AllEmpleados>
        )}
        </Table>
    </>
)
}
export default EmpleadosView

