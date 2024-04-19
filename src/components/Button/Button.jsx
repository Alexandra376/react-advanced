import "./style.css";

function Button({name, type, text, className}) {
    return(
        <button className={className} type={type}>{text}</button>
    )
}

export default Button;
