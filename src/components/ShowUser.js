import React, { useState ,useEffect } from 'react'
import userService from 'services/user'
import Table  from 'react-bootstrap/Table'
import {
    useParams
  } from "react-router-dom"
import { Button } from 'react-bootstrap'

const ShowUser = () =>{
    const username = useParams().username
    const [user, setUsers] = useState([]);

    useEffect(()=>{
    userService.getUser(username).then(user => {
        setUsers(user)
    })
},[]);

    return (
        <>
        <div>
        <h1>Detalle del usuario</h1>
        <Table bordered hover size="sm" responsive>
            <tbody>
            <tr>
                <th scope="col">Username</th>
                    <td>{user.username}</td></tr>
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
        <Button variant="outline-primary" onClick={()=> userService.deleteUser(user.username)}
        href="/api/admin/users">Eliminar
        </Button>
        <Button variant="outline-primary" href='/api/admin/users/:username/edit'>Editar</Button>
        </div>
        </>
    )
}
export default ShowUser;