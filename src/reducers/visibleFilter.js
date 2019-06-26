const initialState = {
  visibleFilter: localStorage.getItem('filter') || 'all',
};

const visibleFilter = (state = initialState.visibleFilter, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FILTER': {
      return payload;
    }
    default:
      return state;
    case 'SAVE_FILTER': {
      localStorage.setItem('filter', payload);
      return state;
    }
  }
};

export default visibleFilter;
