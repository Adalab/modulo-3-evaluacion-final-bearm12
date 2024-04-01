import "../scss/components/CharacterDetail.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function CharacterDetail({ character }) {
  return (
    <section className="detail">
      <NavLink className="detail__btn" to={"/"}>
        <div className="detail__btn--box">Volver</div>
      </NavLink>
      <div className="detailCard">
        <h2 className="detailCard__title">{character.name}</h2>
        <div className="detailCard__group">
          <img
            className="detailCard__image"
            src={character.photo}
            alt={character.name}
          />
          <ul className="detailCard__list">
            <li className="detailCard__item">
              <h3>Status: </h3>
              <p>{character.status}</p>
            </li>
            <li className="detailCard__item">
              <h3>Species: </h3>
              <p>{character.species}</p>
            </li>
            <li className="detailCard__item">
              <h3>Origin: </h3>
              <p>{character.origin}</p>
            </li>
            <li className="detailCard__item">
              <h3>Episodes: </h3>
              <p>{character.episodes}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.object,
};
