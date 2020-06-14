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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  processTags = (tags) => {
    return tags
      .split(", ")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
  };

  render() {
    return (
      <Provider store={store}>
        <NavBar title="To Do List" />
        <SearchOptions
          updateSearchTags={this.updateSearchTags}
          tagOptions={this.state.tagOptions}
        />
        <AllLists
          searchKeywords={this.state.searchKeywords}
          searchTags={this.state.searchTags}
          lists={this.state.lists}
          updateTagOptions={this.updateTagOptions}
          viewCompleted={this.state.viewCompleted}
        />
      </Provider>
    );
  }
}

export default hot(module)(Main);
