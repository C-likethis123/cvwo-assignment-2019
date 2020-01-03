import React from "react";
import Task from "./Task";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.updateTask = this.updateTask.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/lists/${this.props.id}/tasks.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ tasks: data });
      });
  }

  updateTask(task) {
    let newTasks = this.state.tasks.filter((currTask) => currTask.id !== task.id);
    newTasks.push(task);
    this.setState({
      task: newTasks,
    });
  }

  handleUpdate(task) {
    fetch(`http://localhost:3000/api/v1/lists/${this.props.id}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({task: task}),
      }).then(() => this.updateTask(task));
  }

  render() {
    let tasks = [];
    this.state.tasks.forEach(task => {
      if (!task.isCompleted) {
        tasks.push(
          <Task
            key={task.id}
            task={task}
            handleUpdate={this.handleUpdate}
          />
        );
      }
    });

    return (
      <div className="todo-list" key={this.props.id}>
        <div className="todo-list-title">{this.props.title}</div>
        <div className="items-container">{tasks}</div>
      </div>
    );
  }
}

export default List;
