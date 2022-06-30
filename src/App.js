import 'styles/App.css';
import Users from 'views/users/showAllUsers'
import Clientes from 'views/clientes/showAllClientes'
import Empleados from 'views/empleados/showAllEmpleados'
import User from 'components/users/ShowUser'
import Cliente from 'components/clientes/ShowCliente'
import Empleado from 'components/empleados/ShowEmpleado'
import FormUser from 'components/users/FormUser'
import FormCliente from 'components/clientes/FormCliente'
import FormEmpleado from 'components/empleados/FormEmpleados'
import FormLogin from 'components/login/FormLogin';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Route,Routes } from "react-router-dom"

function App() {
  return (
    
    <div className='container'>
    <Router>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Nav className="me-auto">
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/admin/users">Usuarios</NavLink>
        <NavLink to = "/clientes">Clientes</NavLink>
        <NavLink to = "/empleados">Empleados</NavLink>
        <NavLink to = "/login">Login</NavLink>
      </Nav>
      </Container>
      </Navbar>
      <Routes>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/users/:username" element={<User />}/>
        <Route path="/users/create" element={<FormUser/>} />
        <Route path="/admin/users/:username/edit" element={<FormUser/>} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/:id" element={<Cliente />}/>
        <Route path="/clientes/create" element={<FormCliente/>} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/empleados/:id" element={<Empleado />}/>
        <Route path="/empleados/create" element={<FormEmpleado/>} />
        <Route path="/login" element={<FormLogin/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
