import woman from "../assets/woman.png";
import "../styles/card.css";

const Card1 = () => {
  const name = "Ava";
  const title = "UX designer";

  return (
    <div className="profile-card">
        <div className="top">
            <img src={woman} alt={name} />
        </div>
        <div className="bottom">
            <p>{name}</p>
            <p>{title}</p>
        </div>
    </div>
  );
};

export default Card1;
