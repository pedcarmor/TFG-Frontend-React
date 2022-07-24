import React, {useState} from 'react'
import { Button, Form, FormLabel, FormControl,FormGroup, Alert, FormCheck} from 'react-bootstrap'
import productoService from 'services/products/producto'
import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, useParams } from "react-router-dom";

export default function FormProducto() { 
    const nombre = useParams().nombre
    console.log(nombre);
    let navigate = useNavigate()
  
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [editing, setEditing] = useState(false)
  
    const [producto, setProductos] = useState([]);

    const onSubmit = values =>{
        if(editing){
            productoService.editProducto(values)      
        }else{
            productoService.createProducto(values)
        }
    navigate("/", { replace: true });
  }
  
   return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Nombre: </FormLabel>
          <FormControl {...register("nombre",
                          { required: "Campo obligatorio"})} />
          <ErrorMessage className='alert-danger' errors={errors} name = "nombre" as={<Alert variant="danger" />}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Precio:</FormLabel>
          <FormControl {...register("precio",
                        { required: "Campo obligatorio"})} />
          <ErrorMessage errors={errors} name = "precio" as={<Alert variant="danger" />}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Cantidad almacen:</FormLabel>
          <FormControl {...register("cantidadalmacen",
                        { required: "Campo obligatorio"})} />
          <ErrorMessage errors={errors} name = "cantidadalmacen" as={<Alert variant="danger" />}/>
        </FormGroup>
        <FormGroup>
          <FormLabel>Stock Seguridad:</FormLabel>
          <FormControl {...register("stockseguridad",
                        { required: "Campo obligatorio"})} />
          <ErrorMessage errors={errors} name = "stockseguridad" as={<Alert variant="danger" />}/>
        </FormGroup>
        <br/>
        <Button type="submit">Añadir producto</Button>
        </Form>
    </>
  )
}