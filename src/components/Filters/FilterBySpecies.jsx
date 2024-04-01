import PropTypes from "prop-types";

function FilterBySpecies({ filterSpecie, spevieValue }) {
  const handleChange = (ev) => {
    filterSpecie(ev.target.value);
  };
  return (
    <div>
      <h3 className="inputs__title">By species</h3>
      <div className="inputs__choices">
        <label htmlFor="all">
          <input
            type="radio"
            name="specie"
            id="all"
            value=""
            onChange={handleChange}
            checked={spevieValue === ""}
          />
          All
        </label>
        <label htmlFor="human">
          <input
            type="radio"
            name="specie"
            id="human"
            value="human"
            onChange={handleChange}
            checked={spevieValue === "human"}
          />
          Human
        </label>
        <label htmlFor="alien">
          <input
            type="radio"
            name="specie"
            id="alien"
            value="alien"
            onChange={handleChange}
            checked={spevieValue === "alien"}
          />
          Alien
        </label>
      </div>
    </div>
  );
}

export default FilterBySpecies;

FilterBySpecies.propTypes = {
  filterSpecie: PropTypes.func.isRequired,
  spevieValue: PropTypes.string.isRequired,
};
