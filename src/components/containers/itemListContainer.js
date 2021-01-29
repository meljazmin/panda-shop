import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const [carrito, setCarrito] = useState([]);
    return (
        <>
            <a href="#" className="h1">{props.greeting}</a>
            {/* <button onClick={() => { setCarrito([...carrito, { name: 'chanclas atr' }]) }}>Agregar producto</button> */}
            <div className="d-flex flex-row">
                <ItemCount stock={10} initial={1} onAdd={(count) => alert('Items agregados: ' + count)} />
                <ItemCount stock={0} initial={0} onAdd={(count) => alert('Items agregados: ' + count)} />
            </div>
        </>
    )

}
export default ItemListContainer; 