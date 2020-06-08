import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadFeed } from "./store/slices/feed";
import Feed from "./components/Feed/Feed";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  const [newMessage, setNewMessage] = useState();

  const feed = useSelector((state) => state.entities.feed.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFeed());
  }, [dispatch]);

  const handleNewMessage = (message) => {
    if (message) {
      let output = { content: message.toString() };
      setNewMessage(output);
    }
    console.log(newMessage);
  };

  return (
    <div className="wrapper">
      <div className="navWrapper">
        <Navbar />
      </div>
      <div className="formWrapper">
        <Form onNewMessage={handleNewMessage} />
      </div>
      <div className="feedWrapper">
        <Feed feed={feed} />
      </div>
    </div>
  );
};

export default App;
