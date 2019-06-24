const removeTodo = id => ({ type: 'REMOVE_TODO', id });
const toggleTodo = (id, isComplete) => ({
  type: 'TOGGLE_TODO',
  id,
  isComplete,
});
const addTodo = obj => ({
  type: 'ADD_TODO', obj,
});
const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text,
});
const saveTodo = () => ({
  type: 'SAVE_TODO',
});

const selectAllTodos = () => ({ type: 'SELECT_ALL_TODOS' });
const removeCompletedTodos = () => ({ type: 'REMOVE_COMPLETED_TODOS' });
const setFilter = filter => ({
  type: 'SET_FILTER',
  filter,
});

export {
  removeTodo,
  toggleTodo,
  addTodo,
  editTodo,
  selectAllTodos,
  removeCompletedTodos,
  setFilter,
  saveTodo,
};
