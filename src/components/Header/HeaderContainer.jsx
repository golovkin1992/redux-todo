import { connect } from 'react-redux';
import { addTodoAction, toggleAllTodosAction } from '../../actions';
import Header from './Header';

const mapStateToProps = state => ({
  total: state.todos.length,
  active: state.todos.filter(el => !el.isComplete).length,
});
export default
connect(mapStateToProps,
  {
    addTodo: addTodoAction,
    toggleAllTodos: toggleAllTodosAction,
  })(Header);
