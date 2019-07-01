const initialState = {
  visibleFilter: localStorage.getItem('filter') || 'all',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FILTER': {
      localStorage.setItem('filter', payload);
      return { visibleFilter: payload };
    }
    default: {
      return state;
    }
  }
};
