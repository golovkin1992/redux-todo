import { connect } from 'react-redux';
import { addTodoAction, toggleAllTodosAction } from '../../actions';
import Header from './Header';

const mapStateToProps = (state) => {
  const { todos: { todos } } = state;
  return {
    total: todos.length,
    active: todos.filter(el => !el.isComplete).length,
  };
};
export default
connect(mapStateToProps,
  {
    addTodo: addTodoAction,
    toggleAllTodos: toggleAllTodosAction,
  })(Header);
