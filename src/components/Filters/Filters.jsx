import PropTypes from "prop-types";
import FilterByName from "./FilterByName";

function Filters({ filterName, nameValue }) {
  return (
    <form>
      <h2>Filtros</h2>
      <FilterByName filterName={filterName} nameValue={nameValue} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  filterName: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
};
