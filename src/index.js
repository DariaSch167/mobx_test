import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { Provider } from "mobx-react";
import BooksStore from "./stores/BookStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const stores = {
  bookStore: new BooksStore(),
};

root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);
