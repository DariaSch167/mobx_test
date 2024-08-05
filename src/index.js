import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "mobx-react";
import BooksStore from "./stores/BooksStore";

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
