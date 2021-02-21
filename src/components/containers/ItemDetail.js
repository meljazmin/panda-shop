import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);
    const cartContext = useContext(CartContext);
    const history = useHistory();

    const onAdd = (count) => {
        setCount(count);
    }

    const addToCart = () => {
        try {
            cartContext.addItem(product, count);
            history.push("/cart");
        } catch (e) {
            alert(e);
        }
    }

    return (
        <>
            <div className="container-fluid w-100">
                <div className="row">
                    <div className="col-8 p-2">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src={"/images/" + product.pictureUrl} alt={product.title} className="mw-100" width="300px" height="300px" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <p className="text-center">{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        {count === 0 &&
                            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                        }
                        {count > 0 &&
                            <>
                                <p>Ha seleccionado {count} item(s) de este producto</p>
                                <button type="button" className="btn btn-danger" onClick={addToCart} >Finalizar compra</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;