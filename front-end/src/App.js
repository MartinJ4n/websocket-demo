import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadFeed } from "./store/slices/feed";
import Feed from "./components/Feed/Feed";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const feed = useSelector((state) => state.entities.feed.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFeed());
  }, [dispatch]);

  const handleChange = ({ currentTarget: input }) => {
    setInputValue(input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    // server call
    console.log(inputValue);
  };

  return (
    <div className="wrapper">
      <div className="navWrapper">
        <Navbar />
      </div>
      <div className="formWrapper">
        <Form
          inputValue={inputValue}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="feedWrapper">
        <Feed feed={feed} />
      </div>
    </div>
  );
};

export default App;
