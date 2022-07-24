import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/auth'
export default function logout(){
    const request = axios.get(baseUrl+"/logout",{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return request.then(response => response.data).catch(e=>{
            console.error(e);
            throw new Error('Response is NOT OK')
        })
}