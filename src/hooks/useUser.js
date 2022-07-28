import Context from 'context/UserContext'
import { useCallback, useContext } from 'react'
import loginService from 'services/login/login'

export default function useUser(){
    const {jwt,setJWT,role, setRole} = useContext(Context)

    const login = useCallback(({usernameOrEmail,password})=>{
        loginService({usernameOrEmail,password})
        .then(res=>{
            window.sessionStorage.setItem('jwt', res.jwt)
            setJWT(res.jwt)
            setRole(res.authorities[0].authority)
        })
        .catch(err =>{
            window.sessionStorage.removeItem('jwt')
            setRole(null)
            console.error(err)
        })
    },[setJWT,setRole])
    //Cada vez que cambie el jwt la funcion de callback deberia volver a crearse.

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
        setRole(null)
    },[setJWT,setRole])
    return {
        isLogged: Boolean(jwt),
        hasAuthority: Boolean(role),
        login,
        logout
    }
}