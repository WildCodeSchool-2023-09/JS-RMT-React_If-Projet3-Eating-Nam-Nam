import PropTypes from "prop-types";

function RecipeSelect({ functionFilter, title, tab }) {
  return (
    <select onChange={(e) => functionFilter(e.target.value)}>
      <option value="all">{title}</option>
      {Array.from(tab).map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

RecipeSelect.propTypes = {
  functionFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tab: PropTypes.shape.isRequired,
};

export default RecipeSelect;
