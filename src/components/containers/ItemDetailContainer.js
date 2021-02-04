import ItemDetail from "./ItemDetail";
import productList from '../../products';
import { useEffect, useState } from "react";

const request = new Promise((res) => {
    setTimeout(() => {
        const index = Math.ceil(Math.random() * productList.length - 1);
        res(productList[index]);
    }, 2000);
})

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        request.then(res => {
            setProduct(res);
        });
    }, []);

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer;