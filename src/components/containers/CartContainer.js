import { useContext, useRef } from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
import CountWidget from "../widgets/CountWidget";
import ItemCount from "./ItemCount";

const CartContainer = () => {
    const cartContext = useContext(CartContext);
    const itemContainerRef = useRef();

    const onCartClear = () => {
        cartContext.clear();
    }

    const onItemRemove = (evt) => {
        const id = itemContainerRef.current.id;
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
                    <button className="btn btn-danger" onClick={onCartClear}>Limpiar carrito</button>
                    <Container >
                        {cartContext.cart.map(item => {
                            return (
                                <div key={item.item.id} id={item.item.id} ref={itemContainerRef}>
                                    <div className="row m-2">
                                        <div className="col-sm-1">
                                            <img src={'/images/' + item.item.pictureUrl} alt={item.item.description} width="75px" height="75px" />
                                        </div>
                                        <div className="col-sm-5">
                                            <h5>{item.item.description}</h5>
                                        </div>
                                        <div className="col-sm-3">
                                            {/* <h4>{item.quantity}</h4> */}    
                                            {/* <input type="number" min="0" value={item.quantity} onChange={onItemQuantityChange} /> */}
                                            <CountWidget initial={item.quantity} stock={item.stock} onIncrease={onCountChange} onDecrease={onCountChange} /> 
                                        </div>
                                        <div className="col-sm-3">
                                            <h4>${item.item.price * item.quantity}</h4>
                                        </div>
                                    </div>
                                    <div className="d-flex ">
                                        <button className="mr-2 button-as-link" onClick={onItemRemove}>Eliminar</button>
                                        <button className="mr-2 button-as-link">Guardar para despues</button>
                                        <button className="mr-2 button-as-link">Más productos similares</button>
                                    </div>
                                </div>
                            )
                        })}
                    </Container>
                </>
            )}
            {(!cartContext.cart || cartContext.cart.length === 0) && (
                <>
                    <Jumbotron className="mt-5">
                        <h1>No hay items en el carrito</h1>
                        <Button >Volver al menu principal</Button>
                    </Jumbotron>
                </>
            )}
        </>
    )
}

export default CartContainer;