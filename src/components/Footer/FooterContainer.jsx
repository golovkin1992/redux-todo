import { connect } from 'react-redux';
import Footer from './Footer';
import { removeCompletedTodosAction, setFilterAction } from '../../actions';

const mapStateToProps = state => ({
  filter: state.visibleFilter,
  total: state.todos.length,
  completed: state.todos.filter(el => el.isComplete).length,
});
export default
connect(mapStateToProps,
  {
    removeCompletedTodos: removeCompletedTodosAction,
    setFilter: setFilterAction,
  })(Footer);
