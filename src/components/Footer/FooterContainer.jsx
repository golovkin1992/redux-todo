import { connect } from 'react-redux';
import Footer from './Footer';
import { removeCompletedTodosAction, setFilterAction, saveFilterAction } from '../../actions';

const mapStateToProps = state => ({
  filter: state.visibleFilter,
  total: state.todos.length,
  completed: state.todos.filter(el => el.isComplete).length,
});
export default
connect(mapStateToProps, { removeCompletedTodosAction, setFilterAction, saveFilterAction })(Footer);
