import { connect } from 'react-redux';
import Footer from './Footer';
import { removeCompletedTodos, setFilter } from '../../actions';

const mapStateToProps = (state) => {
  const { filter } = state.visibleFilter;
  return {
    filter,
    total: state.todos.length,
    completed: state.todos.filter(el => el.isComplete).length,
  };
};
export default connect(mapStateToProps, { removeCompletedTodos, setFilter })(Footer);
