import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, wsConnection } from "../api";

const url = "/api/feed";

const slice = createSlice({
  name: "feed",

  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },

  reducers: {
    feedRequested: (feed, action) => {
      feed.loading = true;
    },

    feedReceived: (feed, action) => {
      feed.list = action.payload.content || action.payload;
      feed.loading = false;
      feed.lastFetch = Date.now();
    },

    feedRequestFailed: (feed, action) => {
      feed.loading = false;
    },

    feedAdded: (feed, action) => {
      feed.list.push(action.payload);
    },
  },
});

export const {
  feedRequested,
  feedReceived,
  feedRequestFailed,
  feedAdded,
} = slice.actions;
export default slice.reducer;

// RESTful API
export const loadFeed = () =>
  apiCallBegan({
    url,
    onStart: feedRequested.type,
    onSuccess: feedReceived.type,
    onError: feedRequestFailed.type,
  });

export const saveFeed = (feed) =>
  apiCallBegan({
    url,
    method: "post",
    data: feed,
    onSuccess: feedAdded.type,
  });

// WebSocket
export const connectFeed = () =>
  wsConnection({
    name: "feed",
    method: "get",
    onSuccess: feedReceived.type,
    onError: feedRequestFailed.type,
  });

export const sendFeed = (content) =>
  wsConnection({
    name: "feed",
    method: "post",
    content,
    onStart: feedRequested.type,
  });
