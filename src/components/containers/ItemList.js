import Item from './Item';
import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { getCollection } from '../../firebase';
import Loading from '../common/Loading';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const idCategory = location.state?.idCategory;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getCollection('products').then(products => {
            if (idCategory) {
                setProducts(products.filter(product => product.idCategory?.toString() === idCategory));
            } else {
                setProducts(products);
            }
        }).catch(error => {
            console.error(error);
        }).finally(() => setLoading(false));
    }, [idCategory]);

    return (
        <>
            {loading && <Loading />}
            {!loading && <div className="container mt-1 mb-1 animate__animated animate__fadeInUp 5s">
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
                        <h3>No se encontaron productos con categoria {idCategory}</h3>
                    </Jumbotron>
                }
            </div>}
        </>
    )
}

export default ItemList; 