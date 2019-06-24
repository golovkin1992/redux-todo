import { connect } from 'react-redux';
import { addTodo, selectAllTodos, saveTodo } from '../../actions';
import Header from './Header';

const mapStateToProps = state => ({
  total: state.todos.length,
  active: state.todos.filter(el => !el.isComplete).length,
});
export default connect(mapStateToProps, { addTodo, selectAllTodos, saveTodo })(Header);
