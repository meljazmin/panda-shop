import { useContext } from "react";
import {Container, Jumbotron } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

 

const CartContainer = () => {
    const cartContext = useContext(CartContext);
    const history = useHistory();

    const onCartClear = () => {
        cartContext.clear();
    }

    const onItemRemove = (evt) => {
        const id = evt.target.closest('tr').id;
        cartContext.removeItem(id);
    }

    const goToOrder = (evt) => {
        evt.preventDefault();

        history.push('/order');
    }

    return (
        <>

            {(cartContext.cart && cartContext.cart.length > 0) && (
                <>
                    <button className="btn button-2" onClick={onCartClear}><FaTrash /></button>
                    <Container>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartContext.cart.map(item => {
                                    return (
                                        <tr key={item.item.id} id={item.item.id} className="">
                                            <td>
                                                <img src={'/images/' + item.item.pictureUrl} alt={item.item.description} width="75px" height="75px" />
                                            </td>
                                            <td className="align-middle-center">
                                                <h5>{item.item.title}</h5>
                                            </td>
                                            <td className="align-middle-center">
                                                <h4>{item.quantity}</h4>
                                            </td>
                                            <td className="align-middle-center">
                                                <h4>${item.item.price * item.quantity}</h4>
                                            </td>
                                            <td className="d-flex align-items-center">
                                                <button className="mr-2 button-as-link" onClick={onItemRemove}>Eliminar</button>
                                                <Link to={{ pathname: `/category/${item.item.idCategory}`, state: { idCategory: item.item.idCategory } }}>
                                                    <button className="mr-2 button-as-link">Más productos similares</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-sm-2 offset-sm-10">
                                <h4>
                                    Total: ${
                                        cartContext.cart.reduce((acum, item) => {
                                            acum += item.quantity * item.item.price;
                                            return acum;
                                        }, 0)
                                    }
                                </h4>
                                <button className="btn button2 btn-block" onClick={goToOrder}>Comprar</button>
                            </div>
                        </div>
                    </Container>
                </>
            )}
            {(!cartContext.cart || cartContext.cart.length === 0) && (
                <>
                    <Jumbotron className="mt-5">
                        <h1>No hay items en el carrito</h1>
                        <Link to={'/'}>
                            <button className=" btn button2">Seguir comprando</button>
                        </Link>
                    </Jumbotron>
                </>
            )}
        </>
    )
}

export default CartContainer;