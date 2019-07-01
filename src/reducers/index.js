import { combineReducers } from 'redux';
import visibleFilter from './visibleFilter';
import todos from './todos';

const reducers = combineReducers({
  visibleFilter,
  todos,
});
export default reducers;
