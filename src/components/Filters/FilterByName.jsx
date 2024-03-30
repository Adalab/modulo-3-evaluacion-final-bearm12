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
      <h3 className="inputs__title">By name</h3>
      <div className="inputs__choices">
        <input
          type="text"
          name="name"
          id="name"
          value={nameValue}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
      </div>
    </div>
  );
}

export default FilterByName;

FilterByName.propTypes = {
  filterName: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
};
