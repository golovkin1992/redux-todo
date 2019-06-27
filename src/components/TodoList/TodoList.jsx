import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem/index';
import './TodoList.css';

const TodoList = ({
  todos,
  toggleTodo,
  editTodo,
  removeTodo,
}) => {
  const elements = todos.map(item => (
    <TodoListItem
      key={item.id}
      {...item}
      toggleTodo={toggleTodo}
      editTodo={editTodo}
      removeTodo={removeTodo}
    />

  ));
  return <ul className="todo-list">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,

};

export default TodoList;
