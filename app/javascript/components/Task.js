import React from "react";
import { Checkbox, Button, Icon } from "semantic-ui-react";
import TaskModal from "./TaskModal";
import dateformat from "dateformat";

const Description = ({ description }) =>
  description ? (
    <div className="other-info">Description: {description}</div>
  ) : null;

const Deadline = ({ deadline }) =>
  deadline ? (
    <div className="other-info">
      Deadline: {dateformat(deadline, "dd/mm/yyyy")}
    </div>
  ) : null;

const Tags = ({ tags }) =>
  tags ? <div className="other-info">Tags: {tags}</div> : null;

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleClick = (e, { checked }) => {
    const updatedTask = {
      ...this.props.task,
      isCompleted: checked,
    };
    this.props.handleUpdate(updatedTask);
  };

  updateTask = (title, description, deadline, tags) => {
    const updatedTask = {
      ...this.props.task,
      title,
      description,
      deadline,
      tags,
    };

    this.props.handleUpdate(updatedTask);
  };

  render() {
    const { title, description, tags, deadline, isCompleted } = this.props.task;
    return (
      <div className="item" key={this.props.task.id}>
        <Checkbox onClick={this.handleClick} checked={this.props.task.isCompleted}/>
        <div className="content-display">
          <div>{this.props.task.title}</div>
          <Description description={description} />
          <Deadline deadline={deadline} />
          <Tags tags={tags} />
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
          onClick={() => this.props.handleDelete(this.props.task)}
        >
          Delete
        </Button>

        {this.state.isModalOpen ? (
          <TaskModal
            title={this.props.task.title}
            description={this.props.task.description}
            deadline={this.props.task.deadline}
            tags={this.props.task.tags}
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
