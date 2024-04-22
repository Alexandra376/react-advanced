import "./style.css";
import Button from "../Button/Button";
import { useState } from "react";
import { LikeIcon } from "../../shared/UI/components/LikeIcon";
import { DislikeIcon } from "../../shared/UI/components/DislikeIcon";

function Feedback() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const makeLike = () => {
        setLike((currentValue =>  currentValue + 1));
    }
    const makeDislike = () => {
        setDislike((currentValue =>  currentValue + 1));
    }
    const reset = () => {
        setLike(0);
        setDislike(0);
    }

    const changeColor = (count) => {
        if (count > 0) {
            return "red"
        }
    }

    return(
        <div className="feedback-container">
            <div className="feedback">
                <div className="icon">
                    <span onClick={makeLike}><LikeIcon color={changeColor(like)}/></span>
                    <p>{like}</p>
                </div>
                <div className="icon">
                    <span onClick={makeDislike}><DislikeIcon color={changeColor(dislike)}/></span>
                    <p>{dislike}</p>
                </div>
                <div className="feedback-button">
                    <Button type="reset" name="Reset Result" onButtonClick={reset} className="reset"/>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
