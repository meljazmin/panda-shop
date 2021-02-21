import Item from './Item';
import productsMock from '../../products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

let request = new Promise((resolve, reject) => {
    
        resolve(productsMock);
});

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        request.then(res => {
            if (categoryId) {
                setProducts(res.filter(product => product.idCategory.toString() === categoryId));
            } else {
                setProducts(res);
            }
        }).catch(error => {
            console.error(error);
        });
    }, [categoryId]);

    return (
        <div className="container mt-1 mb-1">
            <h1 className="text-center">Productos</h1>
            <div className="d-flex flex-wrap justify-content-around m-5">
                {
                    products.map(product => {
                        return <Item key={product.id} product={product} />
                    })
                }
            </div>
            {products.length === 0 &&
                <Jumbotron>
                    <h3>No se encontaron productos con categoria {categoryId}</h3>
                </Jumbotron>
            }
        </div>
    )
}

export default ItemList; 