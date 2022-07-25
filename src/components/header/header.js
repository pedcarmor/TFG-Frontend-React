import { Navbar, Nav, Container } from "react-bootstrap";
import useUser from "hooks/useUser";

export default function Header() {
  const { isLogged, logout } = useUser();
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isLogged ? (
            <>
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/clientes">Clientes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/empleados">Empleados</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/products">Productos</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link href="/" onClick={handleClick}>
                    Desconectar
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link href="/users/create">Registro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                </Nav.Item>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div> 
  );
}
