import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TodoListItem from './TodoListItem/index';
import './TodoList.css';


const TodoList = (
  props,
) => {
  const { arrayTodo, removeTodo } = props;
  const elements = arrayTodo.map(item => (
    <TodoListItem
      key={item.id}
      {...item}
      // onToggle={onToggle}
      onRemove={removeTodo}
      // onEdit={onEdit}
    />

  ));
  return <ul className="todo-list">{elements}</ul>;
};
const mapStateToProps = state => ({
  arrayTodo: state,
});
const mapDispatchToProps = (dispatch) => {
  const { removeTodo, toggleTodo } = bindActionCreators(actions, dispatch);
  console.log(removeTodo);
  return {
    removeTodo: (id) => {
      removeTodo(id);
    },
    toggleTodo: (id, isComplete) => {
      toggleTodo(id, isComplete);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
TodoList.propTypes = {
  arrayTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  // onToggle: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
