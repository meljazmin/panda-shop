import { useContext, useRef } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CountWidget from "../widgets/CountWidget";

const CartContainer = () => {
    const cartContext = useContext(CartContext);
    const itemContainerRef = useRef();

    const onCartClear = () => {
        cartContext.clear();
    }

    const onItemRemove = (evt) => {
        const id = evt.target.closest('tr').id;
        cartContext.removeItem(id);
    }

    const onItemQuantityChange = (evt) => {
        const id = itemContainerRef.current.id;
        const quantity = evt.target.value;
        cartContext.changeItemQuantity(id, quantity);
    }

    const onCountChange = (count) => {
        const id = itemContainerRef.current.id;
        const quantity = count;
        cartContext.changeItemQuantity(id, quantity);
    }

    return (
        <>

            {(cartContext.cart && cartContext.cart.length > 0) && (
                <>
                    {/* <button className="btn btn-danger" onClick={onCartClear}><FaTrash /></button> */}
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
                                                {/* <input type="number" min="0" value={item.quantity} onChange={onItemQuantityChange} /> */}
                                                {/* <CountWidget initial={item.quantity} stock={item.stock} onIncrease={onCountChange} onDecrease={onCountChange} /> */}
                                            </td>
                                            <td className="align-middle-center">
                                                <h4>${item.item.price * item.quantity}</h4>
                                            </td>
                                            <td className="d-flex align-items-center">
                                                <button className="mr-2 button-as-link" onClick={onItemRemove}>Eliminar</button>
                                                {/* <button className="mr-2 button-as-link">Guardar para despues</button> */}
                                                <Link to={`/category/${item.item.idCategory}`}>
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
                                <button className="btn btn-primary btn-block">Comprar</button>
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
                            <Button className="button2">Seguir comprando</Button>
                        </Link>
                    </Jumbotron>
                </>
            )}
        </>
    )
}

export default CartContainer;