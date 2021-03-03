const GenericErrorHandler = ({ error, resetErrorBoundary }) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <p>Ocurrio un error:</p>
                <pre>{error.message}</pre>
                <button className="btn btn-primary" onClick={resetErrorBoundary}>Volver al inicio</button>
            </div>
        </div>
    )
}

export default GenericErrorHandler;