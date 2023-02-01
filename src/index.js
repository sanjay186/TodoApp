import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./component/App";
import { MainContainer } from "./container/MainContainer";
import todoReducer from "./reducer/reducer";
//import {middleware} from './middleware/middleware';

// ========================================
//const deleteMiddleware = applyMiddleware(middleware);
const store = createStore(todoReducer, composeWithDevTools());
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,

  document.getElementById("root")
);
