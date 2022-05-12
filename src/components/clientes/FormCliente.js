import React, {useState} from 'react'
import { Button, Form, FormLabel, FormControl,FormGroup,Alert, FormCheck } from 'react-bootstrap'
import clienteService from 'services/clientes/cliente'
import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, useParams } from "react-router-dom";

const patterns = {
  dni:/^[0-9]{8,8}[A-Za-z]$/,
  telefono: /^[0-9]{9}$/,
}

export default function FormCliente() { 
  const id = useParams().id
  console.log(id);
  let navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [editing, setEditing] = useState(false)

  
  const [cliente, setCliente] = useState([]);

  const onSubmit = values =>{
    if(editing){
      clienteService.modifyCliente(values)      
    }else{
      clienteService.createCliente(values)
    }
    navigate("/api/clientes", { replace: true });
  }

    return (
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Nombre y apellidos:</FormLabel>
          <FormControl {...register("nombre",
                          { required: "Campo requerido"})} />
          <ErrorMessage className='alert-danger' errors={errors} name = "nombre" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>DNI:</FormLabel>
          <FormControl {...register("dni",
                          { required: "Campo requerido",
                          pattern: {
                            value: patterns.dni,
                            message: 'El DNI debe contener 8 dígitos y una letra' // JS only: <p>error message</p> TS only support string
                            }})} />
          <ErrorMessage errors={errors} name = "dni" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Dirección:</FormLabel>
          <FormControl {...register("direccion",
                          { required: "Campo requerido"})} />
          <ErrorMessage errors={errors} name = "direccion" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Teléfono:</FormLabel>
          <FormControl {...register("telefono",
                          { required: "Campo requerido",
                          })} />
          <ErrorMessage errors={errors} name = "telefono" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Email:</FormLabel>
          <FormControl type="email" {...register("email")} />
          <ErrorMessage errors={errors} name = "email" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormCheck type="checkbox" label= "¿El cliente tiene IVA?" {...register("tieneIVA")} />
          <ErrorMessage errors={errors} name = "tieneIVA" as={<Alert variant="danger" />}/>
          </FormGroup>
          <Button type="submit">Guardar</Button>
        </Form>
        </>
  )
}