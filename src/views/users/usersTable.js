import AllUsers from 'components/users/AllUsers'
import Table  from 'react-bootstrap/Table'
import userService from 'services/users/user'
import React, { useState ,useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useNavigate } from "react-router-dom";
const UsersView = () => {

    const [users, setUsers] = useState([])
    const {isLogged} = useUser()
    let navigate = useNavigate()
    useEffect(()=>{
        if(!isLogged){
            navigate("/login",{ replace: true })
        }else{
            userService.getAll().then(initialUsers => {
                setUsers(initialUsers)
            })
        }
    },[isLogged,navigate]);
    
return(
    <>
    <h1>Usuarios</h1>
        <Table bordered hover>
        <thead>
                <tr>
                <th scope="col">Username</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col">DNI</th>
                </tr>
            </thead>
        {users.map((user, i) => 
          <AllUsers
          key={i}
          user={user}>
          </AllUsers>
        )}
        </Table>
    </>
)
}
export default UsersView

