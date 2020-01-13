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
      .then(response => {
        return response.json();
      })
      .then(task => {
        this.setState({
          tasks: this.state.tasks.concat(task)
        });
      });
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

  handleUpdate = task => {
    fetch(
      `http://localhost:3000/api/v1/lists/${this.props.id}/tasks/${task.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task: task })
      }
    ).then(() => {
      this.setState(prevState => {
        const prevTasks = [...prevState.tasks];

        const indexOfTask = prevTasks.findIndex(
          currTask => currTask.id === task.id
        );
        prevTasks[indexOfTask] = Object.assign({}, task);
        return {
          tasks: prevTasks
        };
      });
    });
  };

  handleOpen = () => {
    this.setState((prevState, prevProps) => {
      return {
        isModalOpen: true
      };
    });
  };

  handleClose = () => {
    this.setState((prevState, prevProps) => {
      return {
        isModalOpen: false
      };
    });
  };

  handleSearch = (task, searchKeywords) => {
    const taskTags = task.tags.split(",");
    return taskTags.some(tag => tag.includes(searchKeywords));
  };

  render() {
    let tasks = [];
    this.state.tasks.forEach(task => {
      if (
        !task.isCompleted &&
        this.handleSearch(task, this.props.searchKeywords)
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
          isEditable={this.state.isEditable}
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
