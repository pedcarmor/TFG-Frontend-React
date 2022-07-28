import React, { useState, useEffect } from "react";
import empleadoService from "services/empleados/empleado";
import Table from "react-bootstrap/Table";
import useUser from "hooks/useUser";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";

const ShowEmpleado = () => {
  const id = useParams().id;
  const [empleado, setEmpleado] = useState([]);
  const { isLogged, hasAuthority } = useUser();
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate("/login", { replace: true });
    } else {
      empleadoService.getEmpleado(id).then((empleado) => {
        setEmpleado(empleado);
      });
    }
  }, [isLogged, navigate, id]);
  return (
    <>
      <div>
        <h1 className="h1-margin">Detalle del empleado</h1>
        <Table bordered size="sm" responsive>
          <tbody>
            <tr>
              <th scope="col">Nombre</th>
              <td>{empleado.nombre}</td>
            </tr>
            <tr>
              <th scope="col">Dirección</th>
              <td>{empleado.direccion}</td>
            </tr>
            <tr>
              <th scope="col">Teléfono</th>
              <td>{empleado.telefono}</td>
            </tr>
            <tr>
              <th scope="col">Email</th>
              <td>{empleado.email}</td>
            </tr>
            <tr>
              <th scope="col">DNI</th>
              <td>{empleado.dni}</td>
            </tr>
            <tr>
              <th scope="col">Faltas</th>
              <td>{empleado.faltas}</td>
            </tr>
            <tr>
              <th scope="col">Horario</th>
              <td>{empleado.horario}</td>
            </tr>
            <tr>
              <th scope="col">Horas trabajadas</th>
              <td>{empleado.horasTrabajadas}</td>
            </tr>
            <tr>
              <th scope="col">Salario</th>
              <td>{empleado.salario}</td>
            </tr>
          </tbody>
        </Table>
        {isLogged && hasAuthority? (
          <>
            <div className="buttons">
              <Stack direction="horizontal" gap={2}>
                <Button
                  to={`/empleados/${empleado.id}/edit`}
                  className="btn btn-primary"
                >
                  Editar
                </Button>
                <div className="vr" />
                <Button
                  className="buttons-table"
                  variant="outline-primary"
                  onClick={() => empleadoService.deleteEmpleado(id)}
                  href="/empleados"
                >
                  Eliminar
                </Button>
              </Stack>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
export default ShowEmpleado;
