import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar';
import ItemListContainer from './components/containers/ItemListContainer';
import ButtonComponent from './components/button';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




let estilos = { color: 'violet', background: 'red' }
const App = () => {

  return (
    <BrowserRouter>
      <NavbarComponent />
      {/* <Route path="*" children={<div>Not found</div>} /> */}

      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting={"Bienvenido/a!"} />
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
        {/* <ButtonComponent text={'Agregar producto al carrito'} /> */}

        {/* <ItemDetailContainer /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
