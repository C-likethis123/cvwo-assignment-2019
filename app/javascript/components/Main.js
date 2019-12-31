import React from "react";
import AllLists from './AllLists';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>To Do List App</div>
        <AllLists />
      </div>
    );
  }
}

export default Main;
