import React from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import TagInput from "./TagInput";
import { processTags, convertBackToString } from "../utils";
class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      title: this.props.title || "",
      description: this.props.description || "",
      deadline: this.props.deadline ? new Date(this.props.deadline) : undefined,
      tags: processTags(this.props.tags) || [],
    };
  }

  handleChange = () => {
    const attribute = event.target.id;
    const changedValue = event.target.value;
    this.setState(() => ({
      [attribute]: changedValue
    }));
  };

  changeTagInput = (data) => {
    this.setState(() => ({
      tags: data,
    }));
  };

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
