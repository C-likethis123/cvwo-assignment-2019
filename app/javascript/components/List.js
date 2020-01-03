import React from "react";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/lists/${this.props.id}/tasks.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ tasks: data });
      });
  }

  render() {
    let tasks = [];
    this.state.tasks.forEach(task =>
      tasks.push(<div key={task.id}>{task.title}</div>)
    );
    return (
      <div className="todo-list" key={this.props.id}>
        <div className="todo-list-title">{this.props.title}</div>
        <div className="items-container">{tasks}</div>
      </div>
    );
  }
}

export default List;
