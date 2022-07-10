import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import useUser from 'hooks/useUser'

export default function Header(){
    const {isLogged,logout} = useUser()
    const handleClick = e=>{
      e.preventDefault()
      logout()
    }
    return (
        <Navbar>
            <Container>
            <Nav className="me-auto">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/admin/users">Usuarios</NavLink>
                <NavLink to = "/clientes">Clientes</NavLink>
                <NavLink to = "/empleados">Empleados</NavLink>
                {isLogged 
                    ?<NavLink to = "/" onClick={handleClick}>Desconectar</NavLink>
                    :<NavLink to = "/login">Iniciar sesión</NavLink>
                }
            </Nav>
            </Container>
        </Navbar>
    )
}