import AllEmpleados from 'components/empleados/AllEmpleados'
import Table  from 'react-bootstrap/Table'
import empleadoService from 'services/empleados/empleado'
import React, { useState ,useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useNavigate } from "react-router-dom";
const EmpleadosView = () => {

    const {isLogged} = useUser()
    let navigate = useNavigate()
    const [empleados, setEmpleados] = useState([])
    useEffect(()=>{
        if(!isLogged){
            navigate("/login",{ replace: true })
        }else{
            empleadoService.getAll().then(initialEmpleados => {
                setEmpleados(initialEmpleados)
            })
        }
    },[isLogged,navigate]);
    
return(
    <>
    <h1 className='h1-margin'>Empleados</h1>
        <Table responsive bordered hover size="md">
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

