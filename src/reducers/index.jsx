import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import rotationReducer from "./rotationsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  brMap: rotationReducer,
  crafting: rotationReducer,
});

export default rootReducer;
