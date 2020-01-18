import React from "react";
import List from "./List";

class AllLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      tagOptions: [],
    };
  }

  render() {
    let lists = this.props.lists.map(list => {
      return (
        <List
          key={list.id}
          id={list.id}
          title={list.title}
          searchKeywords={this.props.searchKeywords}
          searchTags={this.props.searchTags}
          viewCompleted={this.props.viewCompleted}
        />
      );
    });

    return (
      <div>
        <div className="list-display">{lists}</div>
      </div>
    );
  }
}

export default AllLists;
