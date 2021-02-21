import { useContext } from "react";
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {
    const cartContext = useContext(CartContext);

    const onCartClear = () => {
        cartContext.clear();
    }

    return (
        <>
            {(cartContext.cart && cartContext.cart.length > 0) && (
                <>
                    <button className="btn btn-danger" onClick={onCartClear}>Limpiar carrito</button>
                    {cartContext.cart.map(item => {
                        return <div key={item.item.id}>
                            <h1>{item.item.description}</h1>
                            <h2>Cantidad: {item.quantity}</h2>
                        </div>
                    })}
                </>
            )}
        </>
    )
}

export default CartContainer;