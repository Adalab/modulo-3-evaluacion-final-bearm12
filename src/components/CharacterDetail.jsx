import PropTypes from "prop-types";

function CharacterDetail({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <div>
        <img src={character.photo} alt={character.name} />
        <ul>
          <li>
            <h3>Status: </h3>
            <p>{character.status}</p>
          </li>
          <li>
            <h3>Species: </h3>
            <p>{character.species}</p>
          </li>
          <li>
            <h3>Origin: </h3>
            <p>{character.origin}</p>
          </li>
          <li>
            <h3>Episodes: </h3>
            <p>{character.episodes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.object,
};
