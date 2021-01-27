import './style.css';

const ButtonComponent = ({ text, children }) => {

    const saludar = () => {
        alert('Hola Coders!');
    }
    return (
        <div>
            {children}
            <button onClick="{saludar}">{text}</button>

        </div>
    )

}

export default ButtonComponent;