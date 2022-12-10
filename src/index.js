import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import "./styles/style.css";
import "./styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/FooterStyles.css";

import App from "./App";
import remainders from "./redux";

const store = createStore(remainders);

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
