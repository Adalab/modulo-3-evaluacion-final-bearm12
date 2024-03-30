import PropTypes from "prop-types";
import Character from "./Character";

function CharactersList({ charactersData, searchName }) {
  return (
    <>
      {charactersData.length > 0 ? (
        <ul>
          {charactersData.map((character) => {
            return <Character key={character.id} characterData={character} />;
          })}
        </ul>
      ) : (
        <div>
          <p>No results found for &quot;{searchName}&quot;.</p>
        </div>
      )}
    </>
  );
}

export default CharactersList;

CharactersList.propTypes = {
  charactersData: PropTypes.array.isRequired,
  searchName: PropTypes.string.isRequired,
};
