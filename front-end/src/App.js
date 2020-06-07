import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed } from "./store/slices/feed";

import Feed from "./components/Feed/Feed";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.entities.feed.list);

  useEffect(() => {
    dispatch(loadFeed());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="navWrapper">
        <Navbar />
      </div>
      <div className="formWrapper">
        <Form />
      </div>
      <div className="feedWrapper">
        <Feed feed={feed} />
      </div>
    </div>
  );
};

export default App;
