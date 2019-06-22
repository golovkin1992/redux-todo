import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TodoList from './TodoList';

class TodoListContainer extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <TodoList
        {...todos}
        {...actions}
      />
    );
  }
}
// { todos: { todos, visibleFilter: { filter } } }
/* /const getFilter = (array) => {
  debugger;
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(item => item.isComplete);
    case 'active':
      return todos.filter(item => !item.isComplete);
    default:
      return todos;
  }
};
/ */
const mapStateToProps = state =>

  // const { visibleFilter: { filter } } = state;
  ({ todos: state.todos });
export default connect(mapStateToProps, actions)(TodoList);


TodoListContainer.propTypes = {
  arrayTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  // actions: PropTypes.objectOf(PropTypes.object).isRequired,
  // editTodo: PropTypes.func.isRequired,
  // removeTodo: PropTypes.func.isRequired,
  // toggleTodo: PropTypes.func.isRequired,
};
