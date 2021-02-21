import { FaWhatsapp } from "react-icons/fa";
import './whatsapp.scss';

export default function WhatsApp() {
  return (
    <>
      <a
        target="blank"
        href="https://api.whatsapp.com/send?phone=&text=3516367968"
        className="whatsapp-button">
        <FaWhatsapp className="faIcons" />
      </a>
    </>
  );
}
