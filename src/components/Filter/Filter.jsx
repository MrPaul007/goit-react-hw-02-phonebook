import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return(
    <label>
        <input type="text" value={value} onChange={onChange} />
    </label>
  )   
}

export default Filter;






