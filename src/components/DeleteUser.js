import { useState ,useEffect } from 'react'
import userService from 'services/user'
import {
    useParams, Route, Navigate
  } from "react-router-dom"

const DeleteUser = () =>{
    const username = useParams().username
    const [user, setUsers] = useState([]);

    useEffect(()=>{
    userService.deleteUser(username).then(user => {
        setUsers(null)
    })
});

    <Route path="/api/admin/users/:username/delete" render={() =>
    <Navigate  to="/api/admin/users" replace />
} ></Route>

}
export default DeleteUser;