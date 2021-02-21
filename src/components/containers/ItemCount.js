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
        <div className="p-1 m-1 d-flex flex-column text-center w-100" style={{ width: 'fit-content', opacity: (stock > 0 ? 1 : 0.5) }}>
            <p>Item count <span className={`badge badge-${stock > 0 ? 'success' : 'danger'}`}>Stock {stock}</span></p>
            <div className="m-3 p-2 d-flex flex-row">
                <button className="btn btn-primary" onClick={decreaseCountHandler}><FaMinus /></button><label className="ml-auto mr-auto">{count}</label><button className="btn btn-primary" onClick={increaseCountHandler}><FaPlus /></button>
            </div>
            <button className="btn button2" onClick={addItemHandler}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;