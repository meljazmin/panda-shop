import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar';
import ItemListContainer from './components/containers/ItemListContainer';
import ButtonComponent from './components/button';
import ItemDetailContainer from './components/containers/ItemDetailContainer';





let estilos = { color: 'violet', background: 'red' }
const App = () => {

  return (
    <>
      <NavbarComponent />


      {/* <ButtonComponent text={'Agregar producto al carrito'} /> */}
      <ItemListContainer greeting={"Bienvenido/a!"} />

      <ItemDetailContainer />
    </>

  );
}

export default App;
