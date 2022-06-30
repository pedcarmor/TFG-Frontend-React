import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/auth'

const login = ({usernameOrEmail,password})=>{
    const request = axios.post(baseUrl+"/login",
        JSON.stringify({usernameOrEmail,password}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}

const logout = ()=>{
    const request = axios.get(baseUrl+"/logout",{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.log(e);
            throw new Error('Response is NOT OK')
        })
}

export default {login,logout};