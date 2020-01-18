import React from "react";
import { Checkbox, Button, Icon } from "semantic-ui-react";
import TaskModal from "./TaskModal";
import dateformat from "dateformat";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: Object.assign({}, this.props.task),
      isModalOpen: false
    };
  }

  displayDate(date) {
    return dateformat(date, "dd/mm/yyyy");
  }

  handleClick = (e, { checked }) => {
    this.setState(
      (prevState, prevProps) => ({
        task: Object.assign(prevState.task, { isCompleted: checked })
      }),
      () => {
        const updatedTask = Object.assign({}, this.state.task);
        this.props.handleUpdate(updatedTask);
      }
    );
  };

  updateTask = (title, description, deadline, tags) => {
    this.setState(
      (prevState, prevProps) => {
        return {
          task: Object.assign(prevState.task, {
            title: title,
            description: description,
            deadline: deadline,
            tags: tags
          })
        };
      },
      () => {
        this.props.handleUpdate(Object.assign({}, this.state.task));
      }
    );
  };

  render() {
    return (
      <div className="item" key={this.props.task.id}>
        <Checkbox onClick={this.handleClick} checked={this.props.task.isCompleted}/>
        <div className="content-display">
          <div>{this.props.task.title}</div>
          {this.props.task.description ? (
            <div className="other-info">
              Description: {this.props.task.description}
            </div>
          ) : null}
          {this.props.task.deadline ? (
            <div className="other-info">
              Deadline: {this.displayDate(this.props.task.deadline)}
            </div>
          ) : null}
          {this.props.task.tags ? (
            <div className="other-info">Tags: {this.props.task.tags}</div>
          ) : null}
        </div>
        <Button
          size="mini"
          onClick={() => this.setState({ isModalOpen: true })}
        >
          Edit
        </Button>
        <Button
          size="mini"
          color="red"
          onClick={() => this.props.handleDelete(this.state.task)}
        >
          Delete
        </Button>

        {this.state.isModalOpen ? (
          <TaskModal
            title={this.state.task.title}
            description={this.state.task.description}
            deadline={this.state.task.deadline}
            tags={this.state.task.tags}
            isEditable={true}
            isModalOpen={this.state.isModalOpen}
            handleAdd={this.props.handleAdd}
            updateTask={this.updateTask}
            handleClose={() => this.setState({ isModalOpen: false })}
          />
        ) : null}
      </div>
    );
  }
}

export default Task;
