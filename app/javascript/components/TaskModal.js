import React, { useState } from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import TagInput from "./TagInput";
import { processTags, convertBackToString } from "../utils";

const TaskModal = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [deadline, setDeadline] = useState(
    props.deadline ? new Date(props.deadline) : undefined
  );
  const [tags, setTags] = useState(props.tags ? processTags(props.tags) : []);

  const changeTitle = (event) => setTitle(event.target.value);
  const changeDescription = (event) => setDescription(event.target.value);
  const changeTagInput = (data) => setTags(data);
  const changeDeadline = (date) => setDeadline(date ? new Date(date) : undefined);

  const handleSubmit = () => {
    if (title) {
      if (props.isEditable) {
        props.updateTask(
          title,
          description,
          deadline,
          convertBackToString(tags)
        );
      } else {
        props.handleAdd(
          title,
          description,
          deadline,
          convertBackToString(tags)
        );
      }
      props.handleClose();
    }
  };

  return (
    <Modal open={props.isModalOpen}>
      <Modal.Header>{props.isEditable ? "Edit" : "Add"} a Task</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            required
            control={Input}
            id="title"
            label="Title"
            value={title}
            placeholder="Enter your task here"
            onChange={changeTitle}
          />
          <Form.Field
            control={Input}
            id="description"
            label="Description"
            value={description}
            placeholder="Enter the task description"
            onChange={changeDescription}
          />
          <Form.Field
            control={DatePicker}
            id="deadline"
            label="Deadline"
            autocomplete="off"
            selected={deadline}
            dateFormat="dd/MM/yyyy"
            isClearable
            placeholderText="Click to select a date"
            onChange={changeDeadline}
          />
          <TagInput change={changeTagInput} tags={tags} />
          <Form.Group inline>
            <Form.Field control={Button} onClick={handleSubmit}>
              Submit
            </Form.Field>
            <Form.Field control={Button} onClick={props.handleClose}>
              Cancel
            </Form.Field>
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default TaskModal;
