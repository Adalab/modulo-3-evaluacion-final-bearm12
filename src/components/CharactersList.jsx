import "../scss/components/CharactersList.scss";
import PropTypes from "prop-types";
import Character from "./Character";

function CharactersList({ charactersData, searchName }) {
  return (
    <section className="sectionCharacters">
      {charactersData.length > 0 ? (
        <ul className="characterList">
          {charactersData.map((character) => {
            return <Character key={character.id} characterData={character} />;
          })}
        </ul>
      ) : (
        <div className="center">
          <p className="sectionCharacters__message">
            No results found for &quot;{searchName}&quot;.
          </p>
        </div>
      )}
    </section>
  );
}

export default CharactersList;

CharactersList.propTypes = {
  charactersData: PropTypes.array.isRequired,
  searchName: PropTypes.string.isRequired,
};
