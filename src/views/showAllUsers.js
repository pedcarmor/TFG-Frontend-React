import userService from 'services/user'
import React, { useState ,useEffect } from 'react'
import AllUsers from 'components/AllUsers'

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
        {users.map((user, i) => 
          <AllUsers 
          key={i}
          user={user}>
          </AllUsers>
        )}
      </div>   
)
}
export default Users;