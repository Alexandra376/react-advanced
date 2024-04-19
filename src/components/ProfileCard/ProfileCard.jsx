import "./style.css";
import pirate from "../../assets/images/pirate.jpeg";

function ProfileCard() {
    return(
        <div className="profile-card">
            <img src={pirate} alt="profile_picture"/>
            <h3>Captain Jack Sparrow.</h3>
            <h4>Profession: pirate.</h4>
            <h4>Hobby: rob the ships of visiting sailors.</h4>
        </div>
    )
}

export default ProfileCard;
