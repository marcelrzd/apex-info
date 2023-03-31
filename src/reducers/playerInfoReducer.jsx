const initialState = {
  playerInfos: [],
};

const playerInfosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_playerInfos":
      return {
        ...state,
        playerInfos: action.payload.playerInfos,
      };
    default:
      return {
        ...state,
      };
  }
};

export default playerInfosReducer;
