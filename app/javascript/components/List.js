import React, {useEffect, useState} from "react";
import Task from "./Task";
import TaskModal from "./TaskModal";
import {Button} from "semantic-ui-react";

/** Custom hooks */
import useModalState from "../hooks/useModalState";
const List = ({loadTasks, id, tasks, title: listTitle, addTask, deleteTask, updateTask}) => {
  const {isModalOpen, handleOpen, handleClose} = useModalState();

  // Load lists when component first mounts
  useEffect(() => {
    loadTasks(id);
  }, []);

  const handleAdd = (title, description, deadline, tags) => {
    const task = {
      title,
      description,
      deadline,
      isCompleted: false,
      tags,
      isDailies: listTitle === "Dailies",
    };
    fetch(`/api/v1/lists/${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((task) => addTask(task));
  };
  const handleDelete = (task) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`/api/v1/lists/${id}/tasks/${task.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => deleteTask(task));
    }
  };
  const handleUpdate = (task) => {
    fetch(`/api/v1/lists/${id}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(() => updateTask(task));
  };

  const taskComponent = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />));

  return (
    <div className="todo-list" key={id}>
      <div className="todo-list-title">{listTitle}</div>
      <div className="items-container">{taskComponent}</div>
      <Button className="add-button" onClick={handleOpen}>
        Add a Task
      </Button>
      {isModalOpen && (
        <TaskModal
          isEditable={false}
          handleAdd={handleAdd}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default List;

