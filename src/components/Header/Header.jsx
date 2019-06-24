import React from 'react';
import PropTypes from 'prop-types';
import SelectAllTodo from './SelectAllTodo';
import NewItemTodo from './NewItemTodo';

const Header = ({
  total, active, selectAllTodos, addTodo, saveTodo,
}) => (
  <>
    <SelectAllTodo
      selectAllTodos={selectAllTodos}
      saveTodo={saveTodo}
      total={total}
      completed={active}
    />
    <NewItemTodo
      addTodo={addTodo}
      saveTodo={saveTodo}
    />
  </>
);
export default Header;

Header.propTypes = {
  selectAllTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  saveTodo: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};
