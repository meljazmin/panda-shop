import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './item.scss';
import ItemDetail from './ItemDetail';

const Item = ({ product }) => {
    return (
        <>
            <Link to={`/item/${product.id}`}>
                <div className="item-container text-center p-2">
                    <img src={"/images/" + product.pictureUrl} alt={product.title} width="250px" height="250px" />
                    <h4>{product.title}</h4>
                    <h2>${product.price}</h2>
                </div>
            </Link>
        </>
    )
}

export default Item;