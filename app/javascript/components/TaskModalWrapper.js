import React from "react";
import { Button } from "semantic-ui-react";
import TaskModal from "./TaskModal";

class TaskModalWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  defaultTask = () => {
    return {
      title: "",
      description: "",
      date: new Date(),
      tags: ""
    };
  };

  render() {
    return (
      <div>
        <Button
          className="add-button"
          onClick={() => this.props.handleOpen(this.defaultTask(), false)}
        >
          Add a Task
        </Button>
        <TaskModal
          isEditable={this.props.isEditable}
          isModalOpen={this.props.isModalOpen}
          handleClose={this.props.handleClose}
          handleAdd={this.props.handleAdd}
          taskToEdit={this.props.taskToEdit}
          handleUpdate={this.props.handleUpdate}
        />
      </div>
    );
  }
}

export default TaskModalWrapper;