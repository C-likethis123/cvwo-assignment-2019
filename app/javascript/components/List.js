import React from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isModalOpen: false,
      isEditable: false,
      taskToEdit: {
        title: "",
        description: "",
        date: new Date(),
        tags: ""
      }
    };
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

  handleAdd = (title, description, deadline, tags) => {
    let task = JSON.stringify({
      task: {
        title: title,
        description: description,
        deadline: deadline,
        isCompleted: false,
        tags: tags,
        isDailies: this.props.title === "Dailies"
      }
    });

    fetch(`http://localhost:3000/api/v1/lists/${this.props.id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: task
    })
      .then((response) => {
        return response.json();
      })
      .then((task) => {
        this.setState({
          tasks: this.state.tasks.concat(task)
        });
      });
  };

  handleUpdate = (task) => {
    fetch(`http://localhost:3000/api/v1/lists/${this.props.id}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({task: task}),
    }).then(() => {
      const prevTask = this.state.tasks.find((currTask) => task.id === currTask.id);
      const indexOfTask = this.state.tasks.indexOf(prevTask);
      console.log(indexOfTask);

      const newState = Object.assign({}, this.state);
      newState.tasks[indexOfTask] = task;
      this.setState(newState);
    })
  };

  handleDelete = (task) => {
    fetch(
      `http://localhost:3000/api/v1/lists/${this.props.id}/tasks/${task.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      this.setState({
        tasks: this.state.tasks.filter((currTask) => currTask.id !== task.id)
      });
    });
  };

  handleOpen = (task, isEditable) => {
    this.setState({
      isModalOpen: true,
      isEditable: isEditable,
      taskToEdit: task
    });
  };

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    let tasks = [];
    this.state.tasks.forEach(task => {
      if (!task.isCompleted) {
        tasks.push(
          <Task
            key={task.id}
            task={task}
            handleUpdate={this.handleUpdate}
            handleDelete={this.handleDelete}
            handleOpen={this.handleOpen}
          />
        );
      }
    });

    return (
      <div className="todo-list" key={this.props.id}>
        <div className="todo-list-title">{this.props.title}</div>
        <div className="items-container">{tasks}</div>
        <TaskModalWrapper
          isEditable={this.state.isEditable}
          handleAdd={this.handleAdd}
          isModalOpen={this.state.isModalOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          taskToEdit={this.state.taskToEdit}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default List;
