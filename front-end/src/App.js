import React from "react";

import Feed from "./components/Feed/Feed";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="navWrapper">
        <Navbar />
      </div>
      <div className="formWrapper">
        <Form />
      </div>
      <div className="feedWrapper">
        <Feed />
      </div>
    </div>
  );
}

export default App;
