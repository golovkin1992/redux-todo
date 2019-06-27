import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ToggleAllTodos from './ToggleAllTodos';
import NewItemTodo from './NewItemTodo';

const Header = ({
  total,
  active,
  toggleAllTodos,
  addTodo,
}) => (
  <Fragment>
    <ToggleAllTodos
      onToggleAll={toggleAllTodos}
      total={total}
      active={active}
    />
    <NewItemTodo
      addTodo={addTodo}
    />
  </Fragment>
);
export default Header;

Header.propTypes = {
  toggleAllTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};
