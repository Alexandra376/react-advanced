import "./style.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
    return(
        <form name="submit" className="form-container">
            <span>Login form</span>
            <div className="input-container">
                <Input name="Login form" label="Email" placeholder="Enter your email" type="email" />
                <Input placeholder="Enter your password" label="Password" type="password" className="inputLogin" />
            </div>
            <Button type="submit" name="Login"/>
        </form>
    )
}

export default LoginForm;
