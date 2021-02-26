import { useContext } from "react";
import { Badge, Nav } from "react-bootstrap";
import { FaTwitter, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <Nav>
            <Nav.Link as={Link} to={"/cart"}><FaShoppingCart size={30} />{cart && cart.length > 0 && (
                <Badge>{cart.reduce((acum, item) => {
                    acum += item.quantity;
                    return acum;
                }, 0)}</Badge>
            )}</Nav.Link>
        </Nav>
    )
}
export default Cart; 