import React, { useState } from "react";
import { Checkbox, Button } from "semantic-ui-react";
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

const Task = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e, { checked }) => {
    const updatedTask = {
      ...props.task,
      isCompleted: checked,
    };
    props.handleUpdate(updatedTask);
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const updateTask = (title, description, deadline, tags) => {
    const updatedTask = {
      ...props.task,
      title,
      description,
      deadline,
      tags,
    };

    props.handleUpdate(updatedTask);
  };

  const { title, description, tags, deadline, isCompleted } = props.task;
  return (
    <div className="item">
      <Checkbox onClick={handleClick} checked={isCompleted} />
      <div className="content-display">
        <div>{title}</div>
        <Description description={description} />
        <Deadline deadline={deadline} />
        <Tags tags={tags} />
      </div>
      <Button size="mini" onClick={openModal}>
        Edit
      </Button>
      <Button
        size="mini"
        color="red"
        onClick={() => props.handleDelete(props.task)}
      >
        Delete
      </Button>

      {isModalOpen ? (
        <TaskModal
          {...props.task}
          isEditable={true}
          isModalOpen={isModalOpen}
          handleAdd={props.handleAdd}
          updateTask={updateTask}
          handleClose={closeModal}
        />
      ) : null}
    </div>
  );
};

export default Task;
