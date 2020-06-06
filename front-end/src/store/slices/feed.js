import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

let lastId = 0;
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
      feed.list = action.payload;
      feed.loading = false;
      feed.lastFetch = Date.now();
    },

    feedRequestFailed: (feed, action) => {
      feed.loading = false;
    },

    feedAdded: (feed, action) => {
      feed.list.push({
        id: ++lastId,
        content: action.payload.content,
      });
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

export const loadFeed = () =>
  apiCallBegan({
    url,
    onStart: feedRequested.type,
    onSuccess: feedReceived.type,
    onError: feedRequestFailed.type,
  });
