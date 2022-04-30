import React from 'react'
import { Button} from 'react-bootstrap'
import UsersView from './usersTable';

const Users = () => {

return (
    <>
    <div className='container'>
    <UsersView></UsersView>
    <Button href = "/api/admin/users/create">Crear Usuario</Button>
    </div>
    </>
)
}
export default Users;