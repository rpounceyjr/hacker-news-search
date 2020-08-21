const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_SEARCH_HISTORY":
      if (state.searchHistory.includes(action.searchTerm)) {
        return state;
      }
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.searchTerm],
      };
    default:
      return state;
  }
};

const initState = {
  searchHistory: [],
};

export default rootReducer;
