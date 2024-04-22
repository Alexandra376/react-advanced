import "./style.css";

function Button({name, type, onButtonClick, className}) {
    return(
        <button className={`button ${className}`} type={type} onClick={onButtonClick}>{name}</button>
    )
}

export default Button;
