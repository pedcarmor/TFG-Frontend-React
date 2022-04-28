import 'styles/App.css';
import Users from 'views/showAllUsers'
import User from 'components/ShowUser'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Route,Routes,Navigate } from "react-router-dom"

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
        <Route path="/api/admin/users" element={<Users />} ></Route>
        <Route path="/api/admin/users/:username" element={<User />} ></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
