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

  handleSubmit = () => {
    if (this.state.title) {
      if (this.props.isEditable) {
        this.props.updateTask(
          this.state.title,
          this.state.description,
          this.state.deadline,
          convertBackToString(this.state.tags)
        );
      } else {
        this.props.handleAdd(
          this.state.title,
          this.state.description,
          this.state.deadline,
          convertBackToString(this.state.tags)
        );
      }
      this.props.handleClose();
    }
  };

  render() {
    return (
      <Modal open={this.props.isModalOpen}>
        <Modal.Header>
          {this.props.isEditable ? "Edit" : "Add"} a Task
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              required
              control={Input}
              id="title"
              label="Title"
              value={this.state.title}
              placeholder="Enter your task here"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              id="description"
              label="Description"
              value={this.state.description}
              placeholder="Enter the task description"
              onChange={this.handleChange}
            />
            <Form.Field
              control={DatePicker}
              id="deadline"
              label="Deadline"
              autocomplete="off"
              selected={this.state.deadline}
              dateFormat="dd/MM/yyyy"
              isClearable
              placeholderText="Click to select a date"
              onChange={date => {
                date
                  ? this.setState({ deadline: new Date(date) })
                  : this.setState({ deadline: undefined });
              }}
            />
            <TagInput change={this.changeTagInput} tags={this.state.tags} />
            <Form.Group inline>
              <Form.Field control={Button} onClick={this.handleSubmit}>
                Submit
              </Form.Field>
              <Form.Field control={Button} onClick={this.props.handleClose}>
                Cancel
              </Form.Field>
            </Form.Group>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default TaskModal;
