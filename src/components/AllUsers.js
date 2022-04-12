import React from 'react'
import { Link } from 'react-router-dom'
const AllUsers = ({user,i}) =>{
    return (
        <>
        <table key={i}>
            <tbody className='allUsers'>
                <tr><td>Nombre: {user.nombre}</td></tr>
                <tr><td>Direccion: {user.direccion}</td></tr>
                <tr><td>Telefono: {user.telefono}</td></tr>
                <tr><td>Email: {user.email}</td></tr>
                <tr><td>Username: {user.username}</td></tr>
                <tr><td>DNI: {user.dni}</td></tr>
            </tbody>
        </table>
        <Link to={`/api/admin/users/${user.username}`}>Ver</Link>
        </>
    )
}
export default AllUsers;