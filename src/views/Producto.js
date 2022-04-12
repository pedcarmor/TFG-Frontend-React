import productoService from 'services/producto'
import React, { useState ,useEffect } from 'react'
import Producto from 'components/Producto'

 const Productos = () => {

    const [productos, setProductos] = useState([])
    const [showAll, setShowAll] = useState(true)

    useEffect(()=>{
        productoService.getAll().then(initialProductos => {
            setProductos(initialProductos)
        })
    },[]);

    const productosToShow = showAll
    ? productos
    : productos.filter(producto => producto.nombre)

return (
    <div>
        {productosToShow.map((producto, i) => 
          <Producto 
          key={i}
          producto={producto}>
          </Producto>
        )}
      </div>   
)
}
export default Productos;