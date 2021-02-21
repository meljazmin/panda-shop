import { Nav } from "react-bootstrap";
import { FaTwitter, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";



const Cart = () => {
    return (
        <Nav>
            <Nav.Link as={Link} to={"/cart"}><FaShoppingCart size={30} /></Nav.Link>
        </Nav>
    )
}
export default Cart; 