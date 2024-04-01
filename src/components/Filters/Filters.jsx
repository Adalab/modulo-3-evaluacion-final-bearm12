import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "/src/scss/components/Filters.scss";

function Filters({
  filterName,
  filterSpecie,
  filterStatus,
  clearFilters,
  nameValue,
  spevieValue,
  statusValue,
}) {
  const handleClick = (ev) => {
    ev.preventDefault();
    clearFilters();
  };

  return (
    <form className="form">
      <h2 className="form__title">Filters</h2>
      <div className="form__inputs">
        <FilterByName filterName={filterName} nameValue={nameValue} />
        <FilterBySpecies
          filterSpecie={filterSpecie}
          spevieValue={spevieValue}
        />
        <FilterByStatus filterStatus={filterStatus} statusValue={statusValue} />
      </div>
      <button className="form__btn" onClick={handleClick}>
        Clear search
      </button>
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  filterName: PropTypes.func.isRequired,
  filterSpecie: PropTypes.func.isRequired,
  filterStatus: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  spevieValue: PropTypes.string.isRequired,
  statusValue: PropTypes.array.isRequired,
};
