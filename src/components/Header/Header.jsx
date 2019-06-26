import React from 'react';
import PropTypes from 'prop-types';
import ToggleAllTodos from './ToggleAllTodos';
import NewItemTodo from './NewItemTodo';

const Header = ({
  total,
  active,
  toggleAllTodosAction,
  addTodoAction,
  saveTodoAction,
}) => (
  <React.Fragment>
    <ToggleAllTodos
      toggleAllTodosAction={toggleAllTodosAction}
      saveTodoAction={saveTodoAction}
      total={total}
      active={active}
    />
    <NewItemTodo
      addTodoAction={addTodoAction}
      saveTodoAction={saveTodoAction}
    />
  </React.Fragment>
);
export default Header;

Header.propTypes = {
  toggleAllTodosAction: PropTypes.func.isRequired,
  addTodoAction: PropTypes.func.isRequired,
  saveTodoAction: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};
