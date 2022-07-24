import Context from 'context/UserContext'
import { useCallback, useContext } from 'react'
import loginService from 'services/login/login'
import logoutService from 'services/login/logout'

export default function useUser(){
    const {jwt,setJWT} = useContext(Context)

    const login = useCallback(({usernameOrEmail,password})=>{
        loginService({usernameOrEmail,password})
        .then(res=>{
            window.sessionStorage.setItem('jwt', res.jwt)
            setJWT(res.jwt)
        })
        .catch(err =>{
            window.sessionStorage.removeItem('jwt')
            console.error(err)
        })
    },[setJWT])
    //Cada vez que cambie el jwt la funcion de callback deberia volver a crearse.

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    },[setJWT])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}