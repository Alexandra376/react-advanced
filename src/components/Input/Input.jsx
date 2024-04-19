import "./style.css";

function Input({name, type = "text", placeholder, label, onInputChange}) {
    return(
        <label className="label-container">
            {label}
            <input className="input-login" name={name} type={type} placeholder={placeholder} onChange={onInputChange}></input>
        </label>
    )
}

export default Input;
