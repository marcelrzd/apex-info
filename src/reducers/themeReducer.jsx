const initialState = {
  theme: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return {
        ...state,
      };
  }
};

export default themeReducer;
