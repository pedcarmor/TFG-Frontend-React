import React from 'react'
import EmpleadosView from './empleadosTable';
import { Button, Stack } from 'react-bootstrap';
const Empleados = () => {

return (
    <>
    <div className='container'>
    <h1 className='h1-margin'>Empleados</h1>
    <Stack direction="horizontal" gap={1}>
    <div className="buttons ms-auto">
    <Button href='/empleados/create' className="btn btn-primary">Añadir empleado</Button>
    </div>
    </Stack>
    <EmpleadosView></EmpleadosView>
    </div>
    </>
)
}
export default Empleados;