import React from "react";
import AllLists from "./AllLists";
import SearchOptions from "./SearchOptions";

import {Provider} from "react-redux";
import store from "../stores/index";

const NavBar = () => {
  return (
    <div id="app-title-container">
      <h1 id="app-title">To Do List</h1>
    </div>
  );
};

const Main = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <SearchOptions />
      <AllLists />
    </Provider>
  );
};

export default Main;
