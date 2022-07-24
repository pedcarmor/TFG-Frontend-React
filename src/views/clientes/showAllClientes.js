import React from 'react'
import ClientesView from './clientesTable';
import {Link} from "react-router-dom"
const Clientes = () => {

return (
    <>
    <div className='container'>
    <ClientesView></ClientesView>
    <Link to={`/clientes/create`} className="btn btn-primary">Añadir cliente</Link>
    </div>
    </>
)
}
export default Clientes;