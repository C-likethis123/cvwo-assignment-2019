import React from "react";
import AllLists from './AllLists';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>To do: List of tasks</h1>
        <AllLists />
      </div>
    );
  }
}

export default Main;
