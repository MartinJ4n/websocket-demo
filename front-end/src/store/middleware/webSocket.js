import io from "socket.io-client";
import * as actions from "../api";

const socket = io("http://localhost:3003");

export const webSocket = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.wsConnection.type) return next(action);

  const { name, method, content, onStart, onSuccess } = action.payload;

  if (method === "get") {
    await socket.on(name, (feed) => {
      next(action);
      const payload = {
        content: feed,
      };

      if (onSuccess) dispatch({ type: onSuccess, payload });
    });
  }

  if (method === "post") {
    await socket.emit(name, content);

    if (onStart) dispatch({ type: onStart });
  }
};

export default webSocket;
