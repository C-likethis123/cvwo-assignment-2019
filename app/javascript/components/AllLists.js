import React from "react";
import List from "./List";

class AllLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/lists.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ lists: data });
      });
  }

  render() {
    let lists = this.state.lists.map(list => {
      return <List key={list.id} id={list.id} title={list.title} />;
    });
    return <div className="list-display">{lists}</div>;
  }
}

export default AllLists;
