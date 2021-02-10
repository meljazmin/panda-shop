import ItemDetail from "./ItemDetail";
import productList from '../../products';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

const request = new Promise((res) => {
    setTimeout(() => {
        res(productList);
    }, 2000);
})

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        request.then(res => {
            if (id) {
                setProduct(res.find(product => product.id.toString() === id));
            } else {
                setProduct({});
            }
        });
    }, [id]);

    return (
        <>
            {product &&
                <ItemDetail product={product} />
            }
            {!product && 
                <Jumbotron>
                    <h3>No existe producto con id {id}</h3>
                </Jumbotron>
            }
        </>
    )
}

export default ItemDetailContainer;