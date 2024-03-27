import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Character({ characterData }) {
  return (
    <li>
      <NavLink to={`/character/${characterData.id}`}>
        <h2>{characterData.name}</h2>
        <img src={characterData.photo} alt={characterData.name} />
        <p>{characterData.species}</p>
      </NavLink>
    </li>
  );
}

export default Character;

Character.propTypes = {
  characterData: PropTypes.object.isRequired,
};
