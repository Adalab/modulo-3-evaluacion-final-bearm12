import PropTypes from "prop-types";

function Character({ characterData }) {
  return (
    <li>
      <h2>{characterData.name}</h2>
      <img src={characterData.photo} alt={characterData.name} />
      <p>{characterData.species}</p>
    </li>
  );
}

export default Character;

Character.propTypes = {
  characterData: PropTypes.object.isRequired,
};
