import React from "react";
import App from "../component/App";
import "./Styles/mainContainer.css";

export const MainContainer = () => {
  return (
    <div className="main-div">
      <div className="header">
        <h1>Todo App</h1>
      </div>
      <div className="appcontainer">
        <App />
      </div>
    </div>
  );
};
