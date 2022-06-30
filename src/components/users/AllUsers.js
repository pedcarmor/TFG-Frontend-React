import React from 'react'
import { Link } from 'react-router-dom'

const AllUsers = ({user}) =>{
    return (
        <>
            <tbody>
                <tr>
                <td><Link to={`/admin/users/${user.username}`}>{user.username}</Link></td>
                <td>{user.nombre}</td>
                <td>{user.direccion}</td>
                <td>{user.telefono}</td>
                <td>{user.email}</td>
                <td>{user.dni}</td>
                </tr>
            </tbody>
        </>
    )
}
export default AllUsers;