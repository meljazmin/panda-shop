const GenericErrorHandler = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Ocurrio un error:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Volver al inicio</button>
        </div>
    )
}

export default GenericErrorHandler;