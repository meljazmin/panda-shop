// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavbarComponent from './components/navbar/navbar';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContainer from './components/containers/Cart';
import CartContext from './context/CartContext';
import FooterComponent from './components/footer/footer';
import Contacto from './components/contacto/contacto';
import WhatsApp from './components/whatsapp/whatsapp';
import NotFound from './components/common/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import GenericErrorHandler from './components/common/GenericErrorHandler';
import Order from './components/containers/Order';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={GenericErrorHandler}
      onReset={() => {
        window.location.href = '/';
      }}>
      <CartContext>
        <BrowserRouter>
          <NavbarComponent />
          <div style={{ minHeight: '439px' }}>
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
              <Route path="/cart/">
                <CartContainer />
              </Route>
              <Route path="/contacto">
                <Contacto />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="*" children={<NotFound />} />
            </Switch>
          </div>
          <WhatsApp />
          <FooterComponent />
        </BrowserRouter>
      </CartContext>
    </ErrorBoundary>
  );
}

export default App;
