import React, {useState} from 'react'
import { Button, Form, FormLabel, FormControl,FormGroup } from 'react-bootstrap'
import userService from 'services/user'

const CreateUser = ()=>{
  const [formValues, setFormValues] = useState({
    name: '',
    username:'',
    password:'',
    direccion:'',
    dni: '',
    email: '',
    telefono: '',
  })

  const handleChange = (event) => {
        const {name,value} = event.target
        setFormValues({...formValues,[name]:value})
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    await userService.createUser(formValues)
}

  return(
    <>
      
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Nombre y apellidos:</FormLabel>
          <FormControl type="text" name="nombre" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
          <FormLabel>DNI:</FormLabel>
          <FormControl type="text" name="dni" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
          <FormLabel>Dirección:</FormLabel>
          <FormControl type="text" name="direccion" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
          <FormLabel>Telefono:</FormLabel>
          <FormControl type="text" name="telefono" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
          <FormLabel>Email:</FormLabel>
          <FormControl type="email" name="email" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
          <FormLabel>Nombre de usuario:</FormLabel>
          <FormControl type="text" name="username" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
          <FormLabel>Contraseña:</FormLabel>
          <FormControl type="password" name="password" onChange={handleChange} />
          </FormGroup>
          <Button type="submit">Crear</Button>
        </Form>
        </>
  )
}

export default CreateUser;