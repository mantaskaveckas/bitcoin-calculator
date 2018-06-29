import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { store } from "./configureStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
