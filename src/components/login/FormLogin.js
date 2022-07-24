import React, { useEffect } from 'react'
import { Button, Form, FormLabel, FormControl,FormGroup,Alert } from 'react-bootstrap'
import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router-dom";
import useUser from 'hooks/useUser'

const patterns = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
}

export default function FormLogin() { 
  let navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  const {login, isLogged} = useUser()

  useEffect(()=>{
    if(isLogged) navigate("/",{ replace: true })
  },[isLogged,navigate])

  const onSubmit = values =>{
    login(values)
  }
  return (
      <>
      <h2>Inicio de sesión</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Nombre de usuario o email:</FormLabel>
          <FormControl {...register("usernameOrEmail",
                          { required: "Campo requerido"})} />
          <ErrorMessage className='alert-danger' errors={errors} name = "usernameOrEmail" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Contraseña:</FormLabel>
          <FormControl type="password" {...register("password",
                          { required: "Campo requerido",
                          pattern: {
                            value: patterns.password,
                            message: 'Debe contener 8 caracteres, una minúscula, una mayúscula y un número.'
                            }})} />
          <ErrorMessage errors={errors} name = "password" as={<Alert variant="danger" />}/>
          </FormGroup>
          <Button type="submit">Iniciar sesión</Button>
        </Form>
        </>
  )
}