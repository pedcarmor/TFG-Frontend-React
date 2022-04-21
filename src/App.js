import logo from './logo.svg';
import './App.css';
import Productos from 'views/AllProductos';
import Producto from 'components/Producto';

import {
  BrowserRouter as Router,
  NavLink, Route,Routes
} from "react-router-dom"

function App() {
  return (
    <div className='container'>
      <h1>TFG de Pedro Pablo y José Francisco</h1>
      <Router>
      <div className='menu'>
        <NavLink to="/">INICIO</NavLink>
        <NavLink to="/api/products">PRODUCTOS</NavLink>
      </div>
      <Routes>
        <Route path="/api/products" element={<Productos />} ></Route>
        <Route path="/api/products/:nombre" element={<Producto />} ></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
