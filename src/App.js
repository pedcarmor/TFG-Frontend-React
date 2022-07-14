import React from 'react'
import logo from './logo.svg';
import './App.css';
import Productos from 'views/AllProductos';
import FormProducto from 'services/products/producto';
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
        <div className='inicio'>
        <NavLink to="/">INICIO</NavLink>
        </div>
        <div className='Productos'>
        <NavLink to="/api/products">PRODUCTOS</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/api/products" element={<Productos />} ></Route>
        <Route path="/api/products/:nombre" element={<Producto />} ></Route>
        <Route path="/api/products/create" element={<FormProducto/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
