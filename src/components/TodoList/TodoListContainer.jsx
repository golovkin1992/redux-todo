import { connect } from 'react-redux';
import { removeTodoAction, toggleTodoAction, editTodoAction } from '../../actions';
import TodoList from './TodoList';

const getFilter = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(item => item.isComplete);
    case 'active':
      return todos.filter(item => !item.isComplete);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  const { todos: { todos }, visibleFilter: { visibleFilter } } = state;
  return {
    todos: getFilter(todos, visibleFilter),
  };
};
export default
connect(mapStateToProps,
  {
    removeTodo: removeTodoAction,
    toggleTodo: toggleTodoAction,
    editTodo: editTodoAction,
  })(TodoList);
