const initialState = {
  visibleFilter: localStorage.getItem('filter') || 'all',
};

const visibleFilter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FILTER': {
      localStorage.setItem('filter', payload);
      return payload;
    }
    default: {
      if (type === '@@INIT') {
        return state.visibleFilter;
      }
      return state;
    }
  }
};

export default visibleFilter;
