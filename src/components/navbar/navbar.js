import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../widgets/CartWidget';
import './navBar.scss';

const NavbarComponent = () => {
  return (
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand href="#home" variant="text-white">
        <img
          src="/images/logo.png"
          width="50px"
          height="50px"
          className="d-inline-block align-top"
          alt=""
        />{' '}
        Red panda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#quienes-somos">Quienes somos</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cocina</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accesorios de viaje</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Salud y belleza</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Oficina</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark" className="buttonSearch">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

