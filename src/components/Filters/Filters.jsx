import PropTypes from "prop-types";
import FilterByName from "./FilterByName";

function Filters({ filterName }) {
  return (
    <form>
      <h2>Filtros</h2>
      <FilterByName filterName={filterName} />
    </form>
  );
}

export default Filters;

Filters.propTypes = {
  filterName: PropTypes.func.isRequired,
};
