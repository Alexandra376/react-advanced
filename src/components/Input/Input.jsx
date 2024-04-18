import "./style.css";

function Input({name, type, placeholder, label, className}) {
    return(
        <label className="label-container">
            {label}
            <input className={className} name={name} type={type} placeholder={placeholder} required></input>
        </label>
    )
}

export default Input;
