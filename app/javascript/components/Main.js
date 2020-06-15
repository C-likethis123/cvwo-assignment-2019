import React from "react";
import AllLists from "./AllLists";
import { hot } from "react-hot-loader";
import SearchOptions from "./SearchOptions";

import { Provider } from "react-redux";
import store from "../stores/index";

const NavBar = (props) => {
  return (
    <div id="app-title-container">
      <h1 id="app-title">{props.title}</h1>
    </div>
  );
};

const Main = (props) => {
  return (
    <Provider store={store}>
      <NavBar title="To Do List" />
      <SearchOptions />
      <AllLists />
    </Provider>
  );
};

export default hot(module)(Main);
