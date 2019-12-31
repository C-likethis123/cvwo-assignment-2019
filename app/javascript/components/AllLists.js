import React from "react";
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
          console.log(data);
        this.setState({ lists: data });
      });
  }

  render() {
      let lists = this.state.lists.map((list) => {
          return(
              <div key={list.id}>
                  <h1>{list.title}</h1>
                  <p>{list.key}</p>
              </div>
          )
      })
    return (
      <div>
        <h1>To do: List of tasks</h1>
        {lists}
      </div>
    );
  }
}

export default AllLists;
