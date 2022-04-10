import React from 'react';
import './Productos.css';

function Productos(prod){
    return(
        <div className='producto'>
            <div className='nombre'><h3>{prod.nombre}</h3></div>
            <div className='precio'>{prod.precio} €</div>
            <div className='cantidadalmacen'>Cantidad: {prod.cantidadalmacen}</div>
            <div className='stockseguridad'> Stock: {prod.stockseguridad}</div>
            
        </div> 
        
        );
}

export default Productos;