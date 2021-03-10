import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom";


const NotFound = () => {
    const location = useLocation();
    return (
        <>
            <Container className="mt-4">
                <Jumbotron className="red-panda-color">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="/images/logo2.png" alt="" width="200px" height="200px" />
                        </div>
                        <div className="col-sm-9">
                            <h1>La página no existe</h1>
                            <h2>No existe la página {location.pathname}</h2>
                        </div>
                    </div>
                </Jumbotron>
            </Container>
        </>
    )
}

export default NotFound;