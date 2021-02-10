import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../widgets/CartWidget';
import './navBar.scss';
import categoryList from '../../categories';
import { useEffect, useState } from 'react';

const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(categoryList);
  }, 2000);
});

const NavbarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    request.then(data => {
      setCategories(data);
    });
  }, []);
  return (
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand href="#home" variant="text-white" as={Link} to={'/'} class="text-center">
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
          <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
          <Nav.Link href="#quienes-somos">Quienes somos</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            {
              categories.map(category => {
                return <NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`} >{category.title}</NavDropdown.Item>
              })
            }
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

