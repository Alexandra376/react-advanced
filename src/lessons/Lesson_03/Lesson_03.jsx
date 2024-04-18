import "./style.css"
// import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {lionData, zebraData, normalizeName} from "./data";

function Lesson_03() {
    // const isPrimary = false;
    return(
        <div className="buttons-container">
            <div className="animal-card-wrapper">
                <AnimalCard
                    animalData={lionData}
                    animalName={normalizeName(lionData.name)}
                >
                </AnimalCard>
                <AnimalCard
                    animalData={zebraData}
                    animalName={normalizeName(zebraData.name)}
                >
                </AnimalCard>
            </div>
            {/*<Button isPrimaryButton/>*/}
            {/*<Button buttonName="Send data" isPrimaryButton={isPrimary} />*/}
        </div>
    )
}
export default Lesson_03
