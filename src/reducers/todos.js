const initialState = {
  todos: JSON.parse(localStorage.getItem('todo')) || [],
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO': {
      const newState = [...state, payload];
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState;
    }
    case 'REMOVE_TODO': {
      const newState = state.filter(el => el.id !== payload);
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState;
    }
    case 'TOGGLE_TODO': {
      const index = state.findIndex(el => el.id === payload);
      const updatedObj = Object.assign({}, state[index],
        { isComplete: !state[index].isComplete });
      const newState = [
        ...state.slice(0, index),
        updatedObj,
        ...state.slice(index + 1),
      ];
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState;
    }
    case 'EDIT_TODO': {
      const { id, text: textEdit } = payload;
      const index = state.findIndex(el => el.id === id);
      const updatedObj = Object.assign({}, state[index], { text: textEdit });
      const newState = [
        ...state.slice(0, index),
        updatedObj,
        ...state.slice(index + 1),
      ];
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState;
    }
    case 'TOGGLE_ALL_TODOS': {
      const isToggleAll = state.every(el => el.isComplete);
      const newState = state.map(el => ({
        ...el,
        isComplete: !isToggleAll,
      }));
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState;
    }
    case 'REMOVE_COMPLETED_TODOS': {
      const newState = state.filter(el => !el.isComplete);
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState;
    }
    default: {
      if (type === '@@INIT') {
        return state.todos;
      }
      return state;
    }
  }
};

export default todos;
