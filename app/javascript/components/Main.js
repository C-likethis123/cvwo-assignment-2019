import React from "react";
import AllLists from "./AllLists";
import { hot } from "react-hot-loader";
import SearchOptions from "./SearchOptions";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeywords: "",
      searchTags: []
    };
  }

  updateSearchKeywords = searchKeywords => {
    this.setState((prevProps, prevState) => {
      return { searchKeywords: searchKeywords };
    });
  };

  updateSearchTags = searchTags => {
    this.setState((prevProps, prevState) => {
      return { searchTags: searchTags };
    });
  }

  render() {
    return (
      <div>
        <h1>To do: List of tasks</h1>
        <SearchOptions
          updateSearchKeywords={this.updateSearchKeywords}
          updateSearchTags={this.updateSearchTags}
        />
        <AllLists
          searchKeywords={this.state.searchKeywords}
          searchTags={this.state.searchTags}
        />
      </div>
    );
  }
}

export default hot(module)(Main);
