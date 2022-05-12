import 'styles/App.css';
import Users from 'views/users/showAllUsers'
import Clientes from 'views/clientes/showAllClientes'
import User from 'components/users/ShowUser'
import Cliente from 'components/clientes/ShowCliente'
import FormUser from 'components/users/FormUser'
import FormCliente from 'components/clientes/FormCliente'
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
        <NavLink to = "/api/admin/users">Usuarios</NavLink>
        <NavLink to = "/api/clientes">Clientes</NavLink>
      </Nav>
      </Container>
      </Navbar>
      <Routes>
        <Route path="/api/admin/users" element={<Users />} />
        <Route path="/api/admin/users/:username" element={<User />}/>
        <Route path="/api/admin/users/create" element={<FormUser/>} />
        <Route path="/api/admin/users/:username/edit" element={<FormUser/>} />
        <Route path="/api/clientes" element={<Clientes />} />
        <Route path="/api/clientes/:id" element={<Cliente />}/>
        <Route path="/api/clientes/create" element={<FormCliente/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
