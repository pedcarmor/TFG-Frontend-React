import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from 'hooks/useUser'

const AllUsers = ({user}) =>{

    const {isLogged} = useUser()
    let navigate = useNavigate()
    useEffect(()=>{
        if(!isLogged) navigate("/login",{ replace: true })
    },[isLogged,navigate]);

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