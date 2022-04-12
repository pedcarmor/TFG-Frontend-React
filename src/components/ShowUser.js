import React, { useState ,useEffect } from 'react'
import userService from 'services/user'
import {
    useParams, Link
  } from "react-router-dom"

const ShowUser = () =>{
    const username = useParams().username
    const [user, setUsers] = useState([]);

    useEffect(()=>{
    userService.getUser(username).then(user => {
        setUsers(user)
    })
});

    return (
        <>
        <table>
            <tbody className='user'>
                <tr><td>Nombre: {user.nombre}</td></tr>
                <tr><td>Direccion: {user.direccion}</td></tr>
                <tr><td>Telefono: {user.telefono}</td></tr>
                <tr><td>Email: {user.email}</td></tr>
                <tr><td>Username: {user.username}</td></tr>
                <tr><td>DNI: {user.dni}</td></tr>
            </tbody>
        </table>

        <Link to={`/api/admin/users/${user.username}/delete`}>Eliminar</Link>
        </>
    )
}
export default ShowUser;