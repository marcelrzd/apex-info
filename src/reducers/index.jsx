import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import playerInfosReducer from "./playerInfoReducer";
import rotationReducer from "./rotationsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  brMap: rotationReducer,
  crafting: rotationReducer,
  playerInfos: playerInfosReducer,
});

export default rootReducer;
