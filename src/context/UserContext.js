import React,{useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider({children}){
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
      )

      const [role, setRole] = useState(
        () => window.sessionStorage.getItem('role')
      )
    return <Context.Provider value={{jwt, setJWT,role, setRole}}>
        {children}
    </Context.Provider>
}
export default Context