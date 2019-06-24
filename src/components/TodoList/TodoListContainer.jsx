import { connect } from 'react-redux';
import * as actions from '../../actions';
import TodoList from './TodoList';

const getFilter = (array, filter) => {
  switch (filter) {
    case 'all':
      return array;
    case 'completed':
      return array.filter(item => item.isComplete);
    case 'active':
      return array.filter(item => !item.isComplete);
    default:
      return array;
  }
};

const mapStateToProps = state => ({ todos: getFilter(state.todos, state.visibleFilter) });
export default connect(mapStateToProps, actions)(TodoList);
