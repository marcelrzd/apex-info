const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload.news,
      };
    default:
      return {
        ...state,
      };
  }
};

export default newsReducer;
