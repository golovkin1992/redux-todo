import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem/index';
import './TodoList.css';

const TodoList = ({
  todos,
  ...actions

}) => {
  const elements = todos.map(item => (
    <TodoListItem
      key={item.id}
      {...item}
      {...actions}
    />

  ));
  return <ul className="todo-list">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TodoList;
