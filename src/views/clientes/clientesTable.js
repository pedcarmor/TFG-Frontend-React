import AllClientes from "components/clientes/AllClientes";
import Table from "react-bootstrap/Table";
import clienteService from "services/clientes/cliente";
import React, { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import { useNavigate } from "react-router-dom";
const ClientesView = () => {
  const { isLogged } = useUser();
  let navigate = useNavigate();
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    if (!isLogged) {
      navigate("/login", { replace: true });
    } else {
      clienteService.getAll().then((initialClientes) => {
        setClientes(initialClientes);
      });
    }
  }, [isLogged, navigate]);
  return (
    <>
      <Table responsive bordered hover size="md">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">DNI</th>
            <th scope="col">¿Tiene IVA?</th>
          </tr>
        </thead>
        {clientes.map((cliente, i) => (
          <AllClientes key={i} cliente={cliente}></AllClientes>
        ))}
      </Table>
    </>
  );
};
export default ClientesView;
