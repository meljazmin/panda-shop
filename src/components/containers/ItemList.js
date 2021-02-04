import Item from './Item';
import productsMock from '../../products';
import { useEffect, useState } from 'react';

let request = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productsMock);
    }, 2000)
});

const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        request.then(res => {
            setProducts(res);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div className="container border mt-1 mb-1">
            <h1>Productos</h1>
            <div className="d-flex justify-content-around m-5">
                {
                    products.map(product => {
                        return <Item key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default ItemList; 