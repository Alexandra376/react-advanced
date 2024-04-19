import "./style.css";

function Input({name, type = "text", placeholder, label, className}) {
    return(
        <label className="label-container">
            {label}
            <input className={className} name={name} type={type} placeholder={placeholder}></input>
        </label>
    )
}

export default Input;
