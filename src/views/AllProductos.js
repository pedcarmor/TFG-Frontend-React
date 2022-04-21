import productoService from 'services/producto'
import React, { useState ,useEffect } from 'react'
import AllProductos from 'components/AllProductos'

const Productos = () => {
    const [productos, setProductos] = useState([])
  
    useEffect(()=>{
        productoService.getAll().then(initialProductos => {
            setProductos(initialProductos)
        })
    },[]);
return (
    <div>
        <h1>Productos</h1>
        {productos.map((producto, i) => 
          <AllProductos
          key={i}
          producto={producto}>
          </AllProductos>
        )}
      </div>   
)
}
export default Productos;