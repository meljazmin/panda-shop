import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const CountWidget = ({ initial, stock, onDecrease, onIncrease }) => {
    const [count, setCount] = useState(initial);

    const increaseCountHandler = () => {
        setCount(prev => {
            let newValue = prev + 1;
            if (newValue > stock) {
                newValue = stock;
            }
            return newValue;
        });
        onIncrease(count);
    }

    const decreaseCountHandler = () => {
        setCount(prev => {
            let newValue = prev - 1;
            if (newValue < 0) {
                newValue = 0;
            }
            return newValue;
        });
        onDecrease(count);
    }

    return (
        <div className="m-3 p-2 d-flex flex-row">
            <button className="btn button2" onClick={decreaseCountHandler}><FaMinus /></button><label className="ml-auto mr-auto">{count}</label><button className="btn button2" onClick={increaseCountHandler}><FaPlus /></button>
        </div>
    )
}

export default CountWidget;