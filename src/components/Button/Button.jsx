import "./style.css";

function Button({name, type, onButtonClick}) {
    return(
        <button className="button-login" type={type} onClick={onButtonClick}>{name}</button>
    )
}

export default Button;
