import React from "react";
import { Button } from "semantic-ui-react";
import TaskModal from "./TaskModal";

class TaskModalWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button className="add-button" onClick={() => this.props.handleOpen()}>
          Add a Task
        </Button>
        <TaskModal
          isEditable={this.props.isEditable}
          isModalOpen={this.props.isModalOpen}
          handleAdd={this.props.handleAdd}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }
}

export default TaskModalWrapper;
