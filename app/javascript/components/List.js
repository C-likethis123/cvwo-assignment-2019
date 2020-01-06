import React from "react";
import Task from "./Task";
import TaskModalWrapper from "./TaskModalWrapper";

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
    let newTasks = this.state.tasks.filter(currTask => currTask.id !== task.id);
    newTasks.push(task);
    this.setState({
      task: newTasks
    });
  }

  handleUpdate(task) {
    fetch(
      `http://localhost:3000/api/v1/lists/${this.props.id}/tasks/${task.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task: task })
      }
    ).then(() => this.updateTask(task));
  }

  addTaskToList = (title, description, deadline, tags) => {
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
      .then(response => {
        return response.json();
      })
      .then(task => {
        this.setState({
          tasks: this.state.tasks.concat(task)
        });
      });
  };

  editTask = (task) => {
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

  handleDelete = task => {
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
        tasks: this.state.tasks.filter(currTask => currTask.id !== task.id)
      });
    });
  };

  openModal = (task, isEditable) => {
    this.setState({
      isModalOpen: true,
      isEditable: isEditable,
      taskToEdit: task
    });
  };

  closeModal = () => {
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
            openModal={this.openModal}
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
          addTaskToList={this.addTaskToList}
          isModalOpen={this.state.isModalOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          taskToEdit={this.state.taskToEdit}
          editTask={this.editTask}
        />
      </div>
    );
  }
}

export default List;
