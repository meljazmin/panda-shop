import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaPhoneAlt, FaTrademark, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhatsApp from "../whatsapp/whatsapp";
import './footer.scss';

const footerStyle = {
    backgroundImage: 'url("/images/fondo-panda.jpg")'
}

const FooterComponent = () => {
    return (
        <footer id="footer">
            <div className="d-flex justify-content-around">
                <div className="p-2">
                    <ul className="mb-7">
                        <li className="item px-3">
                            <Link className="link" to={'/'}>Productos</Link>
                        </li>
                        <li className="item px-3">
                            <Link className="link" to={'/contacto'}>Contactanos</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-2">
                    <h2>Contacto</h2>
                    <div><FaPhoneAlt /> +54 9 1556967705</div>
                    <div><FaEnvelope /> redpanda-objetoscreativos@gmail.com</div>
                </div>
                <div className="p-2">
                    <h2>Seguinos!</h2><br />
                    <div className="d-flex flex-row justify-content-around">
                        <a href="http://www.facebook.com"><FaFacebook className="faIcons" /></a>
                        <a href="http://www.twitter.com"><FaTwitter className="faIcons" /></a>
                        <a href="http://www.instragram.com"><FaInstagram className="faIcons" /></a>
                    </div>
                </div>
            </div>
            <div className="text-center footer-description">
                <p>Red Panda <FaTrademark /> 2020</p>
                <p>Creado por Melanie Monti <a href="http://github.com/meljazmin"><FaGithub className="faIcons" /></a></p>
            </div>
        </footer> 
    )
}


export default FooterComponent; 