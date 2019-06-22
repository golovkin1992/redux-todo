import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools());
/* /store.subscribe(() => {
  localStorage.setItem('todo', JSON.stringify(store.getState()));
});
/ */

export default store;
