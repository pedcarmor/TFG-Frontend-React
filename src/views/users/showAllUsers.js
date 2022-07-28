import React from "react";
import UsersView from "./usersTable";
import { Button, Stack } from "react-bootstrap";
const Users = () => {
  return (
    <>
      <div className="container">
        <h1 className="h1-margin">Usuarios</h1>
        <Stack direction="horizontal" gap={1}>
          <div className="buttons ms-auto">
            <Button href="/users/create" className="btn btn-primary">
              Añadir usuario
            </Button>
          </div>
        </Stack>
        <UsersView></UsersView>
      </div>
    </>
  );
};
export default Users;
