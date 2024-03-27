import PropTypes from "prop-types";

function FilterByName({ filterName, nameValue }) {
  const handleChange = (ev) => {
    filterName(ev.target.value);
  };

  const handleKey = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };
  return (
    <div>
      <label htmlFor="name">By name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={nameValue}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
    </div>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  filterName: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
};
