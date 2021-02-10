import React, { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [carrito, setCarrito] = useState([]);
    return (
        <>
            {/* <div className="jumbotron bg-danger">
                <h1> {props.greeting}</h1>
            </div> */}
            {/* <button onClick={() => { setCarrito([...carrito, { name: 'chanclas atr' }]) }}>Agregar producto</button> */}
            {/* <div className="d-flex flex-row">
                <ItemCount stock={10} initial={1} onAdd={(count) => alert('Items agregados: ' + count)} />
                <ItemCount stock={0} initial={0} onAdd={(count) => alert('Items agregados: ' + count)} />
            </div> */}
            <ItemList />
        </>
    )

}
export default ItemListContainer; 