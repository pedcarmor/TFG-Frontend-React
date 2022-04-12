import React from 'react';
import 'style/Productos.css';

export default function Producto({producto}){
    return(
        <div className='producto'>
            <div className='nombre'><h3>{producto.nombre}</h3></div>
            <div className='precio'>{producto.precio} €</div>
            <div className='cantidadalmacen'>Cantidad: {producto.cantidadalmacen}</div>
            <div className='stockseguridad'> Stock: {producto.stockseguridad}</div>
        </div> 
        
        );
}

