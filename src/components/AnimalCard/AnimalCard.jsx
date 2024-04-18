import "./style.css";

function AnimalCard({animalData, animalName, children}) {
    return(
        <div className="animal-card">
            <h2>{animalName}</h2>
            <p>{animalData.species}</p>
            <img src={animalData.image} alt="animal"/>
            {children}
        </div>
    )
}

export default AnimalCard;
