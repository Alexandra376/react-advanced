import "./Lessons_04.css";
// import Button from "../../components/Button/Button";
// import Input from "../../components/Input/Input";
import Counter from "../../components/Counter/Counter";

function Lessons_04() {
    const showMessage = () => {
        alert("Hello, user");
    };

    const showNameMessage = (userName) => {
        alert(`Hello, ${userName}`);
    };

    const onChange = (event, message) => {
        // console.log(event);
        console.log(`${event.target.value} - ${message}`);
    };

    return (
        <div className="lesson_04-container">
            {/*<Input onInputChange={(event) => onChange(event, "value")} />*/}
            {/*/!* 1 способ передачи функции *!/*/}
            {/*<Button name="Func Inner" onButtonClick={() => alert("Hi")} />*/}
            {/*<Button name="Func Outer" onButtonClick={showMessage} />*/}
            {/*/!* 3 способ передачи функции (с параметрами)*!/*/}
            {/*<Button*/}
            {/*    name="Func With Parametrs"*/}
            {/*    onButtonClick={() => showNameMessage("Tom")}*/}
            {/*/>*/}
            <Counter/>
        </div>
    );
}

export default Lessons_04
