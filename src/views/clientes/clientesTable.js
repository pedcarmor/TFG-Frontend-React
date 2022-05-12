import AllClientes from 'components/clientes/AllClientes'
import Table  from 'react-bootstrap/Table'
import clienteService from 'services/clientes/cliente'
import React, { useState ,useEffect } from 'react'
const ClientesView = () => {

    const [clientes, setClientes] = useState([])
    useEffect(()=>{
        clienteService.getAll().then(initialClientes => {
            setClientes(initialClientes)
        })
    },[]);
return(
    <>
    <h1>Clientes</h1>
        <Table bordered hover>
        <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col">DNI</th>
                <th scope="col">¿Tiene IVA?</th>
                </tr>
            </thead>
        {clientes.map((cliente, i) => 
          <AllClientes
          key={i}
          cliente={cliente}>
          </AllClientes>
        )}
        </Table>
    </>
)
}
export default ClientesView

