import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <img src={"/images/" + product.pictureUrl} alt={product.title} class="w-100 h-100" />
                    </div>
                    <div className="col-4">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <ItemCount stock={product.stock} initial={1} onAdd={() => alert('Agregado')} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;