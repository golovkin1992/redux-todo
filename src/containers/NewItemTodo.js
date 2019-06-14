import { connect } from 'react-redux';
import Header from '../components/NewItemTodo';
import { addTodo } from '../actions';

export default connect(null, { addTodo })(Header);
