import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Character({ characterData }) {
  const deadOrAlive = () => {
    if (characterData.status === "Dead") {
      return <i className="fa-solid fa-skull-crossbones"></i>;
    } else if (characterData.status === "Alive") {
      return <i className="fa-solid fa-heart-pulse"></i>;
    } else {
      return <i className="fa-solid fa-question"></i>;
    }
  };

  return (
    <li>
      <NavLink to={`/character/${characterData.id}`}>
        <h2>{characterData.name}</h2>
        <img src={characterData.photo} alt={characterData.name} />
        <p>{characterData.species}</p>
        <p>
          {`${characterData.status} `}
          {deadOrAlive()}
        </p>
      </NavLink>
    </li>
  );
}

export default Character;

Character.propTypes = {
  characterData: PropTypes.object.isRequired,
};
