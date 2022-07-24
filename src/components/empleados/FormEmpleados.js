import React, {useState, useEffect} from 'react'
import { Button, Form, FormLabel, FormControl,FormGroup,Alert } from 'react-bootstrap'
import empleadoService from 'services/empleados/empleado'
import { useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router-dom";
import useUser from 'hooks/useUser'

const patterns = {
  dni:/^[0-9]{8,8}[A-Za-z]$/,
  telefono: /^[0-9]{9}$/,
}

export default function FormEmpleado() {
  let navigate = useNavigate()
  const {isLogged} = useUser()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [editing, setEditing] = useState(false)
  const [empleado, setEmpleado] = useState(null);

  useEffect(()=>{
    if(!isLogged) navigate("/login",{ replace: true })
},[isLogged,navigate]);

  const onSubmit = values =>{
    if(editing){
      empleadoService.modifyEmpleado(values)      
    }else{
      empleadoService.createEmpleado(values)
    }
    navigate("/empleados", { replace: true });
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
          <FormLabel>Faltas:</FormLabel>
          <FormControl {...register("faltas")} />
          <ErrorMessage errors={errors} name = "faltas" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Horario:</FormLabel>
          <FormControl {...register("horario",
                      { required: "Campo requerido",
                          })} />
          <ErrorMessage errors={errors} name = "horario" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Horas trabajadas:</FormLabel>
          <FormControl type="number" {...register("horasTrabajadas",
                      { required: "Campo requerido",
                          })} />
          <ErrorMessage errors={errors} name = "horasTrabajadas" as={<Alert variant="danger" />}/>
          </FormGroup>
          <FormGroup>
          <FormLabel>Salario:</FormLabel>
          <FormControl type="number" step="0.01" {...register("salario",
                      { required: "Campo requerido",
                          })} />
          <ErrorMessage errors={errors} name = "salario" as={<Alert variant="danger" />}/>
          </FormGroup>
          <Button type="submit">Guardar</Button>
        </Form>
        </>
  )
}