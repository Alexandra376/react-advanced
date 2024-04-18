import "./style.css";

function Button({name, type, children, className}) {
    return(
        <button className={className} name={name} type={type}>{children}</button>
    )
}

export default Button;
