import axios from "axios";
const baseUrl = "http://localhost:8080/api/clientes";

let reqInstance = axios.create({
  headers: {
    Authorization: `Bearer ${window.sessionStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});

const getAll = () => {
  const request = reqInstance.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw new Error("Response is NOT OK");
    });
};

const createCliente = ({
  id,
  tieneIVA,
  dni,
  nombre,
  telefono,
  direccion,
  email,
  jwt,
}) => {
  const request = reqInstance.post(
    baseUrl + "/create",
    JSON.stringify({ id, tieneIVA, dni, nombre, telefono, direccion, email })
  );
  return request
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      throw new Error("Response is NOT OK");
    });
};

const getCliente = (idCliente, jwt) => {
  const request = reqInstance.get(`${baseUrl}/${idCliente}`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw new Error("Response is NOT OK");
    });
};

const deleteCliente = (idCliente, jwt) => {
  const request = reqInstance.delete(`${baseUrl}/${idCliente}/delete`);
  return request
    .then(function (response) {
      console.log(response.data);
      getAll();
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Response is NOT OK");
    });
};

const modifyCliente = ({
  tieneIVA,
  password,
  id,
  dni,
  nombre,
  telefono,
  direccion,
  email,
  jwt,
}) => {
  const request = reqInstance.put(
    `${baseUrl}/${id}/edit`,
    JSON.stringify({
      tieneIVA,
      password,
      id,
      dni,
      nombre,
      telefono,
      direccion,
      email,
    })
  );
  return request
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      throw new Error("Response is NOT OK");
    });
};

export default {
  getAll,
  getCliente,
  deleteCliente,
  createCliente,
  modifyCliente,
};
