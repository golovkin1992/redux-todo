import * as types from '../constants/ActionTypes';

const removeTodoAction = id => ({ type: types.REMOVE_TODO, payload: id });
const addTodoAction = obj => ({ type: types.ADD_TODO, payload: obj });
const toggleTodoAction = id => ({ type: types.TOGGLE_TODO, payload: id });
const editTodoAction = (id, text) => ({ type: types.EDIT_TODO, payload: { id, text } });
const saveTodoAction = () => ({ type: types.SAVE_TODO });
const toggleAllTodosAction = () => ({ type: types.TOGGLE_ALL_TODOS });
const removeCompletedTodosAction = () => ({ type: types.REMOVE_COMPLETED_TODOS });
const setFilterAction = filter => ({ type: types.SET_FILTER, payload: filter });
const saveFilterAction = filter => ({ type: types.SAVE_FILTER, payload: filter });

export {
  removeTodoAction,
  toggleTodoAction,
  addTodoAction,
  editTodoAction,
  toggleAllTodosAction,
  removeCompletedTodosAction,
  setFilterAction,
  saveTodoAction,
  saveFilterAction,
};
