import { useContext, useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { CartContext } from "../../context/CartContext";
import { getCollection, getFirestore } from "../../firebase";
import firebase from 'firebase/app';
import Loading from "../common/Loading";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const Order = () => {
    const errorHandler = useErrorHandler();
    const history = useHistory();
    const cartContext = useContext(CartContext);

    const [customerInfo, setCustomerInfo] = useState({ firstName: '', lastName: '', email: '', address: '', city: '', state: '', zipCode: '', newsletter: true });
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({ show: false, title: '', body: '', closeHandler: () => { } });
    const [order, setOrder] = useState({ id: null, buyer: null, items: null, date: null });

    const [provincias, setProvincias] = useState([]);
    const [localidades, setLocalidades] = useState([]);


    useEffect(() => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(data => {
                setProvincias(data.provincias);
            }).catch(error => {
                errorHandler(error);
            });
    }, []);

    useEffect(() => {
        if (customerInfo.state && customerInfo.state.trim().length > 0) {
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${customerInfo.state}`)
                .then(res => {
                    if (res.ok) return res.json();
                }).then(data => {
                    setLocalidades(data.localidades);
                }).catch(error => {
                    errorHandler(error);
                });
        }
    }, [customerInfo.state])

    const handleBuyerFormInput = (evt) => {
        const { id, value: elemValue, type } = evt.target;

        if (id.includes('input')) {
            let prop = id.replace('input', '');
            prop = prop[0].toLowerCase() + prop.slice(1, prop.length);

            let value = elemValue;
            if (type === 'checkbox') {
                value = evt.target.checked;
            }

            setCustomerInfo((buyer) => {
                return { ...buyer, [prop]: value };
            });
        }

    }

    const makeOrder = (evt) => {
        evt.preventDefault();

        const db = getFirestore();
        const ordersCollection = db.collection('orders');
        const newOrder = {
            buyer: customerInfo,
            items: cartContext.cart.map(item => {
                return { id: item.item.id, title: item.item.title, price: item.item.price, quantity: item.quantity };
            }),
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: cartContext.getTotal()
        }

        setLoading(true);
        const products = getCollection('products');
        products.then(products => {
            const itemsToUpdate = [];
            const itemsToDelete = [];

            cartContext.cart.forEach(item => {
                const product = products.find(p => p.id === item.item.id);
                if (product) {
                    if (product.price !== item.item.price) {
                        itemsToUpdate.push({ item: product, quantity: item.quantity });
                    }
                } else {
                    itemsToDelete.push(item);
                }
            });

            itemsToUpdate.forEach(item => {
                cartContext.addItem(item.item, item.quantity);
            });

            itemsToDelete.forEach(item => {
                cartContext.removeItem(item.item.id);
            });
        }).then(() => {
            setLoading(true);
            ordersCollection.add(newOrder).then(({ id }) => {
                setOrder({ ...newOrder, id });
                cartContext.clear();
                setModal({
                    show: true,
                    title: '¡Su orden se realizado correctamente!',
                    body: `Se ha generado su orden con identificacion ${id}`,
                    closeHandler: () => {
                        history.push('/');
                    }
                });
            }).catch(error => {
                errorHandler(error);
            }).finally(() => {
                setLoading(false);
            });
        }).catch(error => {
            if (error instanceof Error) {

            }
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            {loading && <Loading />}
            {!loading &&
                <>
                    {!order.id &&
                        <div className="container p-2">
                            <div className="row">
                                <div className="col-sm-6">
                                    <form id="buyerForm" onSubmit={makeOrder}>
                                        <div className="form-row">
                                            <div className="col">
                                                <label htmlFor="inputFirstName">Nombre</label>
                                                <input type="text" className="form-control" id="inputFirstName" placeholder="Nombre" onChange={handleBuyerFormInput}  required/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="inputLastName">Apellido</label>
                                                <input type="text" className="form-control" id="inputLastName" placeholder="Apellido" onChange={handleBuyerFormInput} required />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="inputEmail">Email</label>
                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={handleBuyerFormInput} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Direccion</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="Dirección" onChange={handleBuyerFormInput} required />
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Piso" onChange={handleBuyerFormInput} required />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-sm-4">
                                                <label htmlFor="inputState">Provincia</label>
                                                <select id="inputState" className="form-control" onChange={handleBuyerFormInput} required>
                                                    <option value=''>Seleccionar provincia</option>
                                                    {provincias && provincias.map(provincia => {
                                                        return <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>;
                                                    })}
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-5">
                                                <label htmlFor="inputCity">Localidad</label>
                                                <select id="inputCity" className="form-control" onChange={handleBuyerFormInput} required>
                                                    <option value=''>Seleccionar localidad</option>
                                                    {localidades && localidades.map(provincia => {
                                                        return <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>;
                                                    })}
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-3">
                                                <label htmlFor="inputZipCode">Codigo postal</label>
                                                <input type="text" className="form-control" id="inputZipCode" onChange={handleBuyerFormInput} required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="inputNewsletter" onChange={handleBuyerFormInput} />
                                                <label className="form-check-label" htmlFor="inputNewsletter">
                                                    Quiero recibir notificaciones de novedades y descuentos
                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn button2 btn-block">Finalizar compra</button>
                                    </form>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Resumen de compra</b>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Productos ({cartContext.cart.length}) <span className="float-right">$ {cartContext.getTotal()}</span></p>
                                            <p>Envio <span className="float-right">Gratis</span></p>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Total <span className="float-right">$ {cartContext.getTotal()}</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
            <Modal show={modal.show} onHide={modal.closeHandler} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modal.body}</Modal.Body>
                <Modal.Footer>
                    <button className="btn button2" onClick={modal.closeHandler}>
                        Continuar
                            </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Order;