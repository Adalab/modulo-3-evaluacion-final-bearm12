import PropTypes from "prop-types";

function FilterByName({ filterName }) {
  const handleChange = (ev) => {
    filterName(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
    </div>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  filterName: PropTypes.func.isRequired,
};
