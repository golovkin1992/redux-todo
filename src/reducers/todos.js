const initialState = {
  todos: JSON.parse(localStorage.getItem('todo')) || [],
};

export default (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO': {
      const newState = { todos: [...todos, payload] };
      localStorage.setItem('todo', JSON.stringify(newState.todos));
      return newState;
    }
    case 'REMOVE_TODO': {
      const newState = { todos: todos.filter(el => el.id !== payload) };
      localStorage.setItem('todo', JSON.stringify(newState.todos));
      return newState;
    }
    case 'TOGGLE_TODO': {
      const index = todos.findIndex(el => el.id === payload);
      const updatedObj = Object.assign({}, todos[index],
        { isComplete: !todos[index].isComplete });
      const newState = {
        todos: [
          ...todos.slice(0, index),
          updatedObj,
          ...todos.slice(index + 1),
        ],
      };
      localStorage.setItem('todo', JSON.stringify(newState.todos));
      return newState;
    }
    case 'EDIT_TODO': {
      const { id, text: textEdit } = payload;
      const index = todos.findIndex(el => el.id === id);
      const updatedObj = Object.assign({}, todos[index], { text: textEdit });
      const newState = {
        todos: [
          ...todos.slice(0, index),
          updatedObj,
          ...todos.slice(index + 1),
        ],
      };
      localStorage.setItem('todo', JSON.stringify(newState.todos));
      return newState;
    }
    case 'TOGGLE_ALL_TODOS': {
      const isToggleAll = todos.every(el => el.isComplete);
      const newState = {
        todos: todos.map(el => ({
          ...el,
          isComplete: !isToggleAll,
        })),
      };
      localStorage.setItem('todo', JSON.stringify(newState.todos));
      return newState;
    }
    case 'REMOVE_COMPLETED_TODOS': {
      const newState = { todos: todos.filter(el => !el.isComplete) };
      localStorage.setItem('todo', JSON.stringify(newState.todos));
      return newState;
    }
    default: {
      /* /if (type === '@@INIT') {
        return state.todos;
      }/ */
      return state;
    }
  }
};
