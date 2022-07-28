import React from "react";
import ClientesView from "./clientesTable";
import { Button, Stack } from "react-bootstrap";
const Clientes = () => {
  return (
    <>
      <div className="container">
        <h1 className="h1-margin">Clientes</h1>
        <Stack direction="horizontal" gap={1}>
        <div className="buttons ms-auto">
          <Button href='/clientes/create' className="btn btn-primary">
            Añadir cliente
          </Button>
        </div>
        </Stack>
        <ClientesView></ClientesView>
      </div>
    </>
  );
};
export default Clientes;
