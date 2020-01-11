import React from "react";
import { Checkbox, Button, Icon } from "semantic-ui-react";
import TaskModal from "./TaskModal";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: Object.assign({}, this.props.task),
      isModalOpen: false
    };
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
    this.setState((prevState, prevProps) => {
      return {
        task: Object.assign(prevState.task, {
          title: title,
          description: description,
          deadline: deadline,
          tags: tags
        })
      };
    });

    this.props.handleUpdate(Object.assign({}, this.state.task));
  };

  render() {
    return (
      <div className="item" key={this.props.task.id}>
        <Checkbox onClick={this.handleClick} />
        {this.props.task.title}
        <Button
          icon
          size="mini"
          onClick={() => this.setState({ isModalOpen: true })}
        >
          <Icon name="edit"></Icon>
        </Button>
        <Button
          icon
          size="mini"
          color="red"
          onClick={() => this.props.handleDelete(this.state.task)}
        >
          <Icon name="trash"></Icon>
        </Button>
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
      </div>
    );
  }
}

export default Task;
