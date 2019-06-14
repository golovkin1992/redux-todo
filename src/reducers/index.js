const initialState = {
  arrayTodo: JSON.parse(localStorage.getItem('todo')) || [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { obj } = action;
      const newState = [...state, { obj }];
      return newState;
    }
    case 'REMOVE_TODO': {
      const newState = state.filter(el => el.id !== action.id);
      return newState;
    }
    default:
      return state.arrayTodo;
  }
};

export default reducer;
