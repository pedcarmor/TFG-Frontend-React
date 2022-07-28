import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from 'hooks/useUser'

const AllClientes = ({cliente}) =>{

    const {isLogged} = useUser()
    let navigate = useNavigate()
    useEffect(()=>{
        if(!isLogged) navigate("/login",{ replace: true })
    },[isLogged,navigate]);

    let ivaString = ""

    if(cliente.tieneIVA===true){
        ivaString="Sí"
    }else{
        ivaString="No"
    }
    return (
        <>
            <tbody>
                <tr className='hover-row'>
                <td><Link className='row-link' to={`/clientes/${cliente.id}`}>{cliente.nombre}</Link></td>
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