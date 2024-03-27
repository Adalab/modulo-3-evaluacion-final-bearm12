import PropTypes from "prop-types";
import Character from "./Character";

function CharactersList({ charactersData }) {
  return (
    <ul>
      {charactersData.map((character) => {
        return <Character key={character.id} characterData={character} />;
      })}
    </ul>
  );
}

export default CharactersList;

CharactersList.propTypes = {
  charactersData: PropTypes.array.isRequired,
};
