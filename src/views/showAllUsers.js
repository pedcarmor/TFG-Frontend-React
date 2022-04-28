import userService from 'services/user'
import React, { useState ,useEffect } from 'react'
import AllUsers from 'components/AllUsers'
import Table  from 'react-bootstrap/Table'

const Users = () => {
    const [users, setUsers] = useState([])
  
    useEffect(()=>{
        userService.getAll().then(initialUsers => {
            setUsers(initialUsers)
        })
    },[]);
return (
    <div>
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
      </div>   
)
}
export default Users;