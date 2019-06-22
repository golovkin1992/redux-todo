import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';

const Footer = ({
  total,
  completed,
  filter,
  removeCompletedTodos,
  setFilter,
}) => (
  <footer className={`footer ${total === 0 ? ' hidden' : ''}`}>
    <span className="counter">
      {`${total - completed} items left`}
    </span>
    <Filters selectedFilter={filter} onChangeFilter={setFilter} />
    <button
      className="clear-completed"
      type="submit"
      hidden={completed === 0}
      onClick={removeCompletedTodos}
    >








       Clear completed
</button>
  </footer>
);

Footer.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  removeCompletedTodos: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Footer;
