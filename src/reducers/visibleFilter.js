const initialState = {
  filter: localStorage.getItem('filter') || 'all',
};

const visibleFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.filterName;
    }
    default: {
      return state;
    }
  }
};

export default visibleFilter;
