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
        task: Object.assign(prevState.task, { isCompleted: true })
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
        <Checkbox onClick={this.handleClick} />
        <div className="content-display">
          <div>{this.props.task.title}</div>
          <div className="other-info">
            Description: {this.props.task.description}
          </div>
          <div className="other-info">
            Deadline: {this.displayDate(this.props.task.deadline)}
          </div>
          <div className="other-info">Tags: {this.props.task.tags}</div>
        </div>

        <Button
          icon
          size="mini"
          attached="right"
          onClick={() => this.setState({ isModalOpen: true })}
        >
          <Icon name="edit"></Icon>
        </Button>
        <Button
          icon
          attached="right"
          size="mini"
          color="red"
          onClick={() => this.props.handleDelete(this.state.task)}
        >
          <Icon name="trash"></Icon>
        </Button>
        {this.state.isModalOpen ? (
          <TaskModal
            title={this.state.task.title}
            description={this.state.task.description}
            deadline={this.state.task.deadline}
            description={this.state.task.description}
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
