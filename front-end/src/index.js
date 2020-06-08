import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import io from "socket.io-client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
const socket = io("http://localhost:3003");

socket.on("message", (greeting) => console.log(greeting));
// socket.emit("saveFeed", { content: "another feed123" });
socket.on("loadFeed", (sendFeed) => console.log(sendFeed));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
