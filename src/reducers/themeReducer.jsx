const initialState = {
  theme: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      //   return action.payload.theme;
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
