import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './item.scss';
import ItemDetail from './ItemDetail';

const Item = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const onShow = () => setShowModal(true);
    const onHide = () => setShowModal(false);

    return (
        <>
            <div className="item-container text-center p-2" onClick={onShow}>
                <img src={"/images/" + product.pictureUrl} alt={product.title} width="250px" height="250px" />
                <h1>{product.title}</h1>
                <h6>${product.price}</h6>
            </div>
            <Modal size="lg" show={showModal} onHide={onHide}>
                {/* <Modal.Header>
                    <Modal.Title>{product.title}</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <ItemDetail product={product} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Item;