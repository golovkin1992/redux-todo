const initialState = {
  arrayTodo: JSON.parse(localStorage.getItem('todo')) || [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { obj: { id, text, isComplete } } = action;
      const newState = [...state, { id, text, isComplete }];
      return newState;
    }
    case 'REMOVE_TODO': {
      const newState = state.filter(el => el.id !== action.id);
      return newState;
    }
    case 'TOGGLE_TODO': {
      const changeIndex = state.findIndex(el => el.id === action.id);
      const updatedObj = Object.assign({}, state[changeIndex], { isComplete: !action.isComplete });
      const newState = [
        ...state.slice(0, changeIndex),
        updatedObj,
        ...state.slice(changeIndex + 1),
      ];
      return newState;
    }
    case 'EDIT_TODO': {
      const changeIndex = state.findIndex(el => el.id === action.id);
      const updatedObj = Object.assign({}, state[changeIndex], { text: action.text });
      const newState = [
        ...state.slice(0, changeIndex),
        updatedObj,
        ...state.slice(changeIndex + 1),
      ];
      return newState;
    }
    case 'SELECT_ALL_TODOS': {
      const allChecked = state.every(el => el.isComplete);
      const newState = state.map(el => ({
        ...el,
        isComplete: !allChecked,
      }));
      return newState;
    }
    case 'REMOVE_COMPLETED_TODOS': {
      const newState = state.filter(el => !el.isComplete);
      return newState;
    }
    default:
      return state.arrayTodo;
  }
};

export default reducer;
