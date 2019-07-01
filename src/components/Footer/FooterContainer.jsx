import { connect } from 'react-redux';
import Footer from './Footer';
import { removeCompletedTodosAction, setFilterAction } from '../../actions';

const mapStateToProps = (state) => {
  const { todos: { todos }, visibleFilter: { visibleFilter } } = state;
  return {
    filter: visibleFilter,
    total: todos.length,
    completed: todos.filter(el => el.isComplete).length,
  };
};

export default
connect(mapStateToProps,
  {
    removeCompletedTodos: removeCompletedTodosAction,
    setFilter: setFilterAction,
  })(Footer);
