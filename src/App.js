import 'styles/App.css';
import Users from 'views/users/showAllUsers'
import User from 'components/users/ShowUser'
import FormUser from 'components/users/FormUser'
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
      </Nav>
      </Container>
      </Navbar>
      <Routes>
        <Route path="/api/admin/users" element={<Users />} />
        <Route path="/api/admin/users/:username" element={<User />}/>
        <Route path="/api/admin/users/create" element={<FormUser/>} />
        <Route path="/api/admin/users/:username/edit" element={<FormUser/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
