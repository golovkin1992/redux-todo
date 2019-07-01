import * as types from '../constants/ActionTypes';

const {
  REMOVE_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  SAVE_FILTER,
  TOGGLE_ALL_TODOS,
  REMOVE_COMPLETED_TODOS,
  SET_FILTER,
} = types;

const removeTodoAction = id => ({ type: REMOVE_TODO, payload: id });
const addTodoAction = newItem => ({ type: ADD_TODO, payload: newItem });
const toggleTodoAction = id => ({ type: TOGGLE_TODO, payload: id });
const editTodoAction = (id, text) => ({ type: EDIT_TODO, payload: { id, text } });
const saveTodoAction = () => ({ type: SAVE_TODO });
const toggleAllTodosAction = () => ({ type: TOGGLE_ALL_TODOS });
const removeCompletedTodosAction = () => ({ type: REMOVE_COMPLETED_TODOS });
const setFilterAction = filter => ({ type: SET_FILTER, payload: filter });
const saveFilterAction = filter => ({ type: SAVE_FILTER, payload: filter });

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
