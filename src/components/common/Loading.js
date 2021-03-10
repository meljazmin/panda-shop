import { Spinner } from "react-bootstrap";
import 'animate.css';

const Loading = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center animate__animated animate__fadeInUp">
            <Spinner animation="border" role="status">
                <span className="sr-only">Cargando...</span>
            </Spinner>
            <h1>Cargando...</h1>
        </div>
    )
}

export default Loading;