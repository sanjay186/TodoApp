import React from "react";
import "./Styles/mainContainer.css";
import AppContainer from "./AppContainer";

export const MainContainer = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="font">
         <h3>Todo App</h3> 
          </div>
      </div>
     <AppContainer/>
      <div className="footer">
        <div className="font">
        <h3>footer</h3> </div>
      </div>
      
    </div>
  );
};
