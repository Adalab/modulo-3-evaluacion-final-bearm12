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
    <li className="characterList__item">
      <NavLink to={`/character/${characterData.id}`}>
        <div className="characterList__item--container">
          <h2 className="characterList__item--name">{characterData.name}</h2>
        </div>
        <img
          className="characterList__item--photo"
          src={characterData.photo}
          alt={characterData.name}
        />
        <div>
          <p className="characterList__item--specie">{characterData.species}</p>
          <p className="characterList__item--status">
            {`${characterData.status} `}
            {deadOrAlive()}
          </p>
        </div>
      </NavLink>
    </li>
  );
}

export default Character;

Character.propTypes = {
  characterData: PropTypes.object.isRequired,
};
