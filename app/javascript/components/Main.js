import React from "react";
import AllLists from "./AllLists";
import { Input } from "semantic-ui-react";
import { hot } from "react-hot-loader";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeywords: "",
    }
  }

  render() {
    return (
      <div>
        <h1>To do: List of tasks</h1>
        <Input
          icon="search"
          placeholder="Search for tasks..."
          onChange={(event, data) => this.setState((prevProps, prevState) => {
            return {searchKeywords: data.value}
          })}
          />
        <AllLists searchKeywords={this.state.searchKeywords}/>
      </div>
    );
  }
}

export default hot(module)(Main);
