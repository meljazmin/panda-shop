import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    return (
        <>
            <div className="container-fluid border w-100">
                <div className="row">
                    <div className="col-8 p-2">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img src={"/images/" + product.pictureUrl} alt={product.title} class="mw-100" width="300px" height="300px" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 border">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 border">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <ItemCount stock={product.stock} initial={1} onAdd={() => alert('Agregado')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;