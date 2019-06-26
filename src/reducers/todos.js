const initialState = {
  todos: JSON.parse(localStorage.getItem('todo')) || [],
};

const todos = (state = initialState.todos, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO': {
      return [...state, payload];
    }
    case 'REMOVE_TODO': {
      return state.filter(el => el.id !== payload);
    }
    case 'TOGGLE_TODO': {
      const index = state.findIndex(el => el.id === payload);
      const updatedObj = Object.assign({}, state[index],
        { isComplete: !state[index].isComplete });
      return [
        ...state.slice(0, index),
        updatedObj,
        ...state.slice(index + 1),
      ];
    }
    case 'EDIT_TODO': {
      const index = state.findIndex(el => el.id === payload.id);
      const updatedObj = Object.assign({}, state[index], { text: payload.text });
      return [
        ...state.slice(0, index),
        updatedObj,
        ...state.slice(index + 1),
      ];
    }
    case 'TOGGLE_ALL_TODOS': {
      const isToggleAll = state.every(el => el.isComplete);
      return state.map(el => ({
        ...el,
        isComplete: !isToggleAll,
      }));
    }
    case 'REMOVE_COMPLETED_TODOS': {
      return state.filter(el => !el.isComplete);
    }
    case 'SAVE_TODO': {
      localStorage.setItem('todo', JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
};

export default todos;
