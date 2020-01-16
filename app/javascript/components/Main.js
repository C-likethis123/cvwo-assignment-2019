import React from "react";
import AllLists from "./AllLists";
import { hot } from "react-hot-loader";
import SearchOptions from "./SearchOptions";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeywords: ""
    };
  }

  updateSearchKeywords = searchKeywords => {
    this.setState((prevProps, prevState) => {
      return { searchKeywords: searchKeywords };
    });
  };

  render() {
    return (
      <div>
        <h1>To do: List of tasks</h1>
        <SearchOptions updateSearchKeywords={this.updateSearchKeywords} />

        <AllLists searchKeywords={this.state.searchKeywords} />
      </div>
    );
  }
}

export default hot(module)(Main);
