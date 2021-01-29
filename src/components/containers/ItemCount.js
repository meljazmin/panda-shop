import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increaseCountHandler = () => {
        setCount(prev => {
            let newValue = prev + 1;
            if (newValue > stock) {
                newValue = stock;
            }
            return newValue;
        });
    }

    const decreaseCountHandler = () => {
        setCount(prev => {
            let newValue = prev - 1;
            if (newValue < 0) {
                newValue = 0;
            }
            return newValue;
        });
    }

    const addItemHandler = () => {
        if (stock && stock > 0) {
            onAdd(count);
        }
    }

    return (
        <div className="m-3 p-1 border d-flex flex-column text-center" style={{ width: 'fit-content', opacity: (stock > 0 ? 1 : 0.5) }}>
            <p>Item count <span className={`badge badge-${stock > 0 ? 'success' : 'danger'}`}>Stock {stock}</span></p>
            <div className="border m-3 p-2 d-flex flex-row">
                <button className="btn btn-primary" onClick={decreaseCountHandler}><FaMinus /></button><label className="ml-5 mr-5">{count}</label><button className="btn btn-primary" onClick={increaseCountHandler}><FaPlus /></button>
            </div>
            <button className="btn btn-danger" onClick={addItemHandler}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;