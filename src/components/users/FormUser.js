import React, {useState} from 'react'
import { Button, Form, FormLabel, FormControl,FormGroup,Alert } from 'react-bootstrap'
import userService from 'services/users/user'
import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, useParams } from "react-router-dom";

const patterns = {
  dni:/^[0-9]{8,8}[A-Za-z]$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  telefono: /^[0-9]{9}$/,
}

export default function FormUser() { 
  const username = useParams().username
  console.log(username);
  let navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [editing, setEditing] = useState(false)

  
  const [user, setUsers] = useState([]);

  const onSubmit = values =>{
    if(editing){
      userService.modifyUser(values)      
    }else{
      userService.createUser(values)
    }
    navigate("/", { replace: true });
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
          <FormLabel>Nombre de usuario:</FormLabel>
          <FormControl {...register("username",
                          { required: "Campo requerido"})} />
          <ErrorMessage errors={errors} name = "username" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Contraseña:</FormLabel>
          <FormControl type="password" {...register("password",
                          { required: "Campo requerido",
                        pattern: {
                            value: patterns.password,
                            message: 'Debe contener 8 caracteres, una minúscula, una mayúscula y un número.' // JS only: <p>error message</p> TS only support string
                            }})}/>
          <ErrorMessage errors={errors} name = "password" as={<Alert variant="danger" />}/>
          </FormGroup>
          <div className="buttons text-center">
          <Button type="submit">Registrar</Button>
          </div>
        </Form>
        </>
  )
}