import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";
import api from "./middleware/api";
import webSocket from "./middleware/webSocket";

export default () => {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api, webSocket],
  });
};
