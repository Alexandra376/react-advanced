import {v4} from 'uuid';
import "./style.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {animalsData} from "./data";

function Lesson_05() {
    const animalCards = animalsData.map((animalData) => {
        return <AnimalCard key={v4()} animalData={animalData} />;
    });
    return(
        <div className="lesson_05-container">
            {animalCards}
        </div>
    )
}

export default Lesson_05;
