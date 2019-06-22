import { connect } from 'react-redux';
import { addTodo, selectAllTodos } from '../../actions';
import Header from './Header';


export default connect(null, { addTodo, selectAllTodos })(Header);
