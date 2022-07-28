import React, { useState, useEffect } from "react";
import clienteService from "services/clientes/cliente";
import Table from "react-bootstrap/Table";
import useUser from "hooks/useUser";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";

const ShowCliente = () => {
  const id = useParams().id;
  const [cliente, setCliente] = useState([]);
  const { isLogged,hasAuthority } = useUser();

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login", { replace: true });
    } else {
      clienteService.getCliente(id).then((cliente) => {
        setCliente(cliente);
      });
    }
  }, [isLogged, navigate, id]);

  let ivaString = "";
  if (cliente.tieneIVA === true) {
    ivaString = "Sí";
  } else {
    ivaString = "No";
  }

  return (
    <>
      <h1 className="h1-margin">Detalle del cliente</h1>
      <Table responsive bordered size="md">
        <tbody>
          <tr>
            <th scope="col">Nombre</th>
            <td>{cliente.nombre}</td>
          </tr>
          <tr>
            <th scope="col">Dirección</th>
            <td>{cliente.direccion}</td>
          </tr>
          <tr>
            <th scope="col">Teléfono</th>
            <td>{cliente.telefono}</td>
          </tr>
          <tr>
            <th scope="col">Email</th>
            <td>{cliente.email}</td>
          </tr>
          <tr>
            <th scope="col">DNI</th>
            <td>{cliente.dni}</td>
          </tr>
          <tr>
            <th scope="col">¿Tiene IVA?</th>
            <td>{ivaString}</td>
          </tr>
        </tbody>
      </Table>
      {isLogged && hasAuthority? (
        <>
          <div className="buttons">
            <Stack direction="horizontal" gap={2}>
              <Button href={`/clientes/${cliente.id}/edit`} variant="primary">
                Editar
              </Button>
              <div className="vr" />
              <Button
                variant="outline-primary"
                onClick={() => clienteService.deleteCliente(id)}
                href="/clientes"
              >
                Eliminar
              </Button>
            </Stack>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default ShowCliente;
