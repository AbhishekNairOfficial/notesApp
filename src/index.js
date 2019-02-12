import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

const store = createStore(reducer);

const startApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();
};

if (!window.cordova) {
  // This is for development, when Cordova isn't available
  startApp();
} else {
  // This is inside the app, where Cordova is available
  document.addEventListener("deviceready", startApp, false);
}
