import { combineReducers } from "redux";
import feedReducer from "./slices/feed";

export default combineReducers({
  feed: feedReducer,
});
