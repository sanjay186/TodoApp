import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MainContainer } from "./container/MainContainer";

import { store } from "./Redux/store";
console.log("store",store.getState())
ReactDOM.render(
  <Provider store={store}>

    <MainContainer />
  </Provider>,

  document.getElementById("root")
);
