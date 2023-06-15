import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import playerInfosReducer from "./playerInfoReducer";
import rotationReducer from "./rotationsReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  brMap: rotationReducer,
  crafting: rotationReducer,
  playerInfos: playerInfosReducer,
  theme: themeReducer,
});

export default rootReducer;
