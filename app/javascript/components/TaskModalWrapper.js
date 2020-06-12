import React from "react";
import { Button } from "semantic-ui-react";
import TaskModal from "./TaskModal";

const TaskModalWrapper = (props) => {
  return (
    <div>
      <Button className="add-button" onClick={props.handleOpen}>
        Add a Task
      </Button>
      {props.isModalOpen ? <TaskModal isEditable={false} {...props} /> : null}
    </div>
  );
};

export default TaskModalWrapper;
