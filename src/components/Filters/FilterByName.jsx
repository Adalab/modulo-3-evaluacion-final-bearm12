import PropTypes from "prop-types";

function FilterByName({ filterName, nameValue }) {
  const handleChange = (ev) => {
    filterName(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        id="name"
        value={nameValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  filterName: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
};
