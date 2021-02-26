import './contacto.scss';
import '../containers/item.scss';

const Contacto = () => {
    return (
        <section id="contacto">
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-center">Contacto</h1>
                    <p className="text-center">Dejanos tu mensaje</p>
                </div>
                <form id="contactoForm">
                    <fieldset>
                        <legend>Tus datos</legend>
                        <div className="form-group">
                            <label for="nombre">Nombre:</label>
                            <input className="form-control" type="text" name="nombre" required maxlength="50"
                                placeholder="Tu nombre" />
                        </div>
                        <div className="form-group">
                            <label for="apellido">Apellido:</label>
                            <input className="form-control" type="text" name="apellido" required maxlength="50"
                                placeholder="Tu apellido" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input className="form-control" type="email" name="email" placeholder="Tu email" />
                        </div>
                        <div className="form-group">
                            <label for="telefono">Teléfono:</label>
                            <input className="form-control" type="number" name="telefono" placeholder="Tu teléfono" />
                        </div>
                        <div className="form-group">
                            <label for="mensaje">Mensaje:</label>
                            <textarea className="form-control" name="mensaje" rows="10" cols="70"></textarea>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="acepta" value="1" />
                                <label className="form-check-label" for="acepta">¿Deseas suscribirte a nuestro
                                newsletter?</label>
                            </div>
                        </div>
                        <input type="submit" className="btn button2" value="Enviar formulario" id="enviar" />
                        <input type="reset" className="btn button2" value="Limpiar formulario" />
                    </fieldset>
                </form>
            </div>
        </section>
    )
}


export default Contacto; 