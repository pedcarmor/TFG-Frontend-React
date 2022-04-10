import React from 'react'
export default function User ({user}){
    return (
        <tr className='user'>
        <td>Nombre: {user.nombre}</td>
            <td>Direccion: {user.direccion}</td>
            <td>Telefono: {user.telefono}</td>
            <td>Email: {user.email}</td>
            <td>Username: {user.username}</td>
            <td>DNI: {user.dni}</td>
        </tr>
    )
}