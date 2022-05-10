import React from 'react'
import UsersView from './usersTable';
import {Link} from "react-router-dom"
const Users = () => {

return (
    <>
    <div className='container'>
    <UsersView></UsersView>
    <Link to={`/api/admin/users/create`} className="btn btn-primary">Añadir usuario</Link>
    </div>
    </>
)
}
export default Users;