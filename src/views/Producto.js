import productoService from 'services/producto'
import React, { useState ,useEffect } from 'react'
import Producto from 'Productos'

 const Producto = () => {

    const [producto, setProducto] = useState([])
    const [showAll, setShowAll] = useState(true)

    useEffect(()=>{
        productoService.getProducto("miel").then(initialProductos => {
            setProducto(initialProductos)
        })
    },[]);

    const productosToShow = showAll
    ? producto
    : producto.filter(p => producto.nombre)

return (
    <div>
        <h1>Producto</h1>
      <table>
        {productoToShow.map((producto, i) => 
          <Productos 
          key={i}
          producto={producto}>
          </Productos>
        )}
      </table>    
      </div>   
)
}
export default Productos;