import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../widgets/CartWidget';
import './navBar.scss';
import { useEffect, useState } from 'react';
import { getCollection, getDocData, getFirestore } from '../../firebase';
import { useErrorHandler } from 'react-error-boundary';

const request = new Promise((resolve, reject) => {
  const db = getFirestore();
  const categoryCollection = db.collection('categories');
  categoryCollection.get().then(querySnapshot => {
    if (querySnapshot.size === 0) {
      console.warn('No hay categorias!');
      resolve([]);
    }
    resolve(querySnapshot.docs.map(doc => getDocData(doc)));
  });
});

const NavbarComponent = () => {
  const handleError = useErrorHandler();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCollection('categories').then(data => {
      setCategories(data);
    }).catch(error => {
      handleError(error);
    });
  }, []);

  return (
    <Navbar expand="lg" className="navBar">
      <Navbar.Brand href="#home" variant="text-white" as={Link} to={'/'} className="text-center">
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
        <Nav className="m-auto navLinks">
          <Nav.Link as={Link} to={'/'} className="hvr-underline-from-center">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            {
              categories.map(category => {
                return <NavDropdown.Item key={category.id} as={Link} to={{ pathname: `/category/${category.title}`, state: { idCategory: category.id } }} >{category.title}</NavDropdown.Item>
              })
            }
          </NavDropdown>
          <Nav.Link as={Link} to={'/contacto'} className="hvr-underline-from-center">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="dark" className="buttonSearch">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;

