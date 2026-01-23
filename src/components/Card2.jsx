import man from "../assets/man.png";
import "../styles/card.css";

const Card2 = () => {
  const name = "Bob";
  const title = "Developer";

  return (
    <div className="profile-card">
        <div className="top">
            <img src={man} alt={name} />
        </div>
        <div className="bottom">
            <p>{name}</p>
            <p>{title}</p>
        </div>
    </div>
  );
};

export default Card2;
