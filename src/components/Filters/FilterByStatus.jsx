import PropTypes from "prop-types";

function FilterByStatus({ filterStatus, statusValue }) {
  const handleChange = (ev) => {
    filterStatus(ev.target.value, ev.target.checked);
  };
  return (
    <div>
      <h3 className="inputs__title">By status</h3>
      <div className="inputs__choices">
        <label htmlFor="alive">
          <input
            type="checkbox"
            name="alive"
            id="alive"
            value="alive"
            onChange={handleChange}
            checked={statusValue.includes("alive")}
          />
          Alive
        </label>
        <label htmlFor="dead">
          <input
            type="checkbox"
            name="dead"
            id="dead"
            value="dead"
            onChange={handleChange}
            checked={statusValue.includes("dead")}
          />
          Dead
        </label>
        <label htmlFor="unknown">
          <input
            type="checkbox"
            name="unknown"
            id="unknown"
            value="unknown"
            onChange={handleChange}
            checked={statusValue.includes("unknown")}
          />
          Unknown
        </label>
      </div>
    </div>
  );
}

export default FilterByStatus;

FilterByStatus.propTypes = {
  filterStatus: PropTypes.func.isRequired,
  statusValue: PropTypes.array,
};
