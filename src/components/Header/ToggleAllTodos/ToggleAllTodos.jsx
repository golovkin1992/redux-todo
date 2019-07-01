import React from 'react';
import PropTypes from 'prop-types';
import './ToggleAllTodos.css';

const ToggleAllTodos = ({
  total,
  active,
  toggleAllTodos,
}) => (
  <label
    className="label-select-all"
    hidden={total === 0}
    htmlFor="select-all"
  >
    <input
      onChange={toggleAllTodos}
      checked={active === 0}
      type="checkbox"
      id="select-all"
      className="select-all"
    />
    <span className="select-all-pseudo" />
  </label>
);

ToggleAllTodos.propTypes = {
  toggleAllTodos: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};
export default ToggleAllTodos;
