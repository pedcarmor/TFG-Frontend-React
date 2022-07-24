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
import Home from 'views/home'
import Header from 'components/header/header';
import Productos from 'views/AllProductos';
import FormProducto from 'components/productos/FormProducto';
import Producto from 'components/productos/Producto';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import {UserContextProvider} from 'context/UserContext'
function App() {
  return (
    <UserContextProvider>
    <div className='container'>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
        <Route path="/products" element={<Productos />} ></Route>
        <Route path="/products/:id" element={<Producto />} ></Route>
        <Route path="/products/create" element={<FormProducto/>} />
    </Routes>
    </Router>
    </div>
    </UserContextProvider>
  );
}

export default App;
