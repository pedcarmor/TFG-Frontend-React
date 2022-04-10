import userService from 'services/user'
import React, { useState ,useEffect } from 'react'
import User from 'components/User'

 const Users = () => {

    const [users, setUsers] = useState([])
    const [showAll, setShowAll] = useState(true)
    
    useEffect(()=>{
        userService.getAll().then(initialUsers => {
            setUsers(initialUsers)
        })
    },[]);

    const usersToShow = showAll
    ? users
    : users.filter(user => user.username)

return (
    <div>
        <h1>Usuarios</h1>
      <table>
        {usersToShow.map((user, i) => 
          <User 
          key={i}
          user={user}>
          </User>
        )}
      </table>    
      </div>   
)
}
export default Users;