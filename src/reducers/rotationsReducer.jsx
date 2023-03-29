const initialState = {
  brMap: [],
  crafting: [],
};

const rotationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BR_MAP_ROTATION":
      return {
        ...state,
        brMap: action.payload.brMap,
      };
    case "GET_CRAFTING_ITEMS_ROTATION":
      return {
        ...state,
        crafting: action.payload.crafting,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rotationReducer;
