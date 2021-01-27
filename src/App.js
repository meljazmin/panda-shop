import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar';
import ItemListContainer from './components/containers/itemListContainer';
import ButtonComponent from './components/button';





let estilos = { color: 'violet', background: 'red' }
const App = () => {
  
  return (
    <>
      <NavbarComponent />
    
    
      <ButtonComponent text={'Agregar producto al carrito'}/>
      <ItemListContainer greeting = {"Bienvenido/a!"} />
    </>

  );
}

export default App;
