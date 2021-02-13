import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(0);
    const onAdd = (count) => {
        setCount(count);
    }

    return (
        <>
            <div className="container-fluid border w-100">
                <div className="row">
                    <div className="col-8 p-2">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src={"/images/" + product.pictureUrl} alt={product.title} class="mw-100" width="300px" height="300px" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 border">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 border">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        {count === 0 &&
                            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                        }
                        {count > 0 &&
                            <>
                                <p>Ha seleccionado {count} item(s) de este producto</p>
                                <Link to="/cart">
                                    <button type="button" className="btn btn-danger" >Finalizar compra</button>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;