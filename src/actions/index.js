const removeTodo = id => ({ type: 'REMOVE_TODO', id });
const toggleTodo = (id, isComplete) => ({
  type: 'TOGGLE_TODO',
  id,
  isComplete,
});
const addTodo = obj => ({
  type: 'ADD_TODO', obj,
});

export {
  removeTodo,
  toggleTodo,
  addTodo,
};
