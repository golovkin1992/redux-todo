import React from 'react';
import PropTypes from 'prop-types';
import './SelectAllTodo.css';

const SelectAllTodo = (
  {
    selectAllTodos,
    // total,
    // active,
  },
) => (
  <label
    className="label-select-all"
    // hidden={total === 0}
    htmlFor="select-all"
  >
    <input
      onClick={selectAllTodos}
     // onChange={() => {}}
     // checked={active === 0}
      type="checkbox"
      id="select-all"
      className="select-all"
    />
    <span className="select-all-pseudo" />
  </label>
);
export default SelectAllTodo;

SelectAllTodo.propTypes = {
  selectAllTodos: PropTypes.func.isRequired,
  // total: PropTypes.number.isRequired,
  // active: PropTypes.number.isRequired,
};