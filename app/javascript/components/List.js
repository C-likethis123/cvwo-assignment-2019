import React from "react";
import Task from "./Task";
import TaskModalWrapper from "./TaskModalWrapper";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isModalOpen: false
    };
  }

  componentDidMount() {
    this.props.loadTasks(this.props.id);
  }

  handleAdd = (title, description, deadline, tags) => {
    const task = {
      title,
      description,
      deadline,
      isCompleted: false,
      tags,
      isDailies: this.props.title === "Dailies",
    };
    fetch(`/api/v1/lists/${this.props.id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((response) => response.json())
      .then((task) => this.props.addTask(task));
  };

  handleDelete = task => {
    fetch(`/api/v1/lists/${this.props.id}/tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => this.props.deleteTask(task));
  };

  handleUpdate = task => {
    fetch(`/api/v1/lists/${this.props.id}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ task: task }),
    }).then(() => this.props.updateTask(task));
    // .then(() => this.props.updateTagOptions());
  };

  handleOpen = () => {
    this.setState(() => ({
      isModalOpen: true
    }));
  };

  handleClose = () => {
    this.setState(() => ({
      isModalOpen: false
    }));
  };

  matchesSearchTags = (task, searchTags) => {
    const taskTags = task.tags.split(", ");
    const matchesSearchTags =
      searchTags.length === 0
        ? true
        : searchTags.some(tag => taskTags.includes(tag));
    return matchesSearchTags;
  };

  render() {
    let tasks = [];
    this.state.tasks.forEach(task => {
      if (
        task.isCompleted === this.props.viewCompleted &&
        this.matchesSearchKeywords(task, this.props.searchKeywords) &&
        this.matchesSearchTags(task, this.props.searchTags)
      ) {
        tasks.push(
          <Task
            key={task.id}
            task={task}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        );
      }
    });

    return (
      <div className="todo-list" key={this.props.id}>
        <div className="todo-list-title">{this.props.title}</div>
        <div className="items-container">{tasks}</div>
        <TaskModalWrapper
          handleAdd={this.handleAdd}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isModalOpen={this.state.isModalOpen}
        />
      </div>
    );
  }
}

export default List;
