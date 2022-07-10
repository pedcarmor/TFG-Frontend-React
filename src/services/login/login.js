import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/auth'

export default function login ({usernameOrEmail,password}){
    const request = axios.post(baseUrl+"/login",
        JSON.stringify({usernameOrEmail,password}),{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response =>response.data)
            .catch(e=>{
                console.error(e);
                throw new Error('Response is NOT OK')
            })
}