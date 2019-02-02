import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const startApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  registerServiceWorker();
};

if (!window.cordova) {
  // This is for development, when Cordova isn't available
  startApp();
} else {
  // This is inside the app, where Cordova is available
  document.addEventListener("deviceready", startApp, false);
}
