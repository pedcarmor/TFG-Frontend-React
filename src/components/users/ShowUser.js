import React, { useState ,useEffect } from 'react'
import userService from 'services/users/user'
import Table  from 'react-bootstrap/Table'
import useUser from 'hooks/useUser'
import {
    useParams,Link,useNavigate
  } from "react-router-dom"
import { Button } from 'react-bootstrap'

const ShowUser = () =>{  

    const username = useParams().username
    const [user, setUsers] = useState([]);

    const {isLogged} = useUser()
    let navigate = useNavigate()
    useEffect(()=>{
        if(!isLogged){ navigate("/login",{ replace: true })}
        else{
            userService.getUser(username).then(user => {
                setUsers(user)})
        }
    },[isLogged,navigate,username]);  

    return (
        <>
        <div>
        <h1 className='h1-margin'>Detalle del usuario</h1>
        <Table bordered size="sm" responsive>
            <tbody>
            <tr>
                <th scope="col">Username</th>
                    <td>{username}</td></tr>
                <tr><th scope="col">Nombre</th>
                    <td>{user.nombre}</td></tr>
                <tr><th scope="col">Dirección</th>
                    <td>{user.direccion}</td></tr>
                <tr><th scope="col">Teléfono</th>
                    <td>{user.telefono}</td></tr>
                <tr><th scope="col">Email</th>
                    <td>{user.email}</td></tr>
                <tr><th scope="col">DNI</th>
                    <td>{user.dni}</td></tr>
            </tbody>
        </Table>
        {isLogged
        ?<>
        <div>
        <Link to={`/admin/users/${user.username}/edit`} className="btn btn-primary buttons-table">Editar</Link>
        <Button variant="outline-primary" onClick={()=> userService.deleteUser(username)}
        href="/admin/users">Eliminar
        </Button>
        </div></>
        :<div></div>
        }
        </div>
        </>
    )
}
export default ShowUser;