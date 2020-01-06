import React from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskToEdit: {},
      isModalOpen: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.taskToEdit !== this.props.taskToEdit) {
      this.setState({
        taskToEdit: this.props.taskToEdit
      });
    }
  }

  handleChange = () => {
    const attribute = event.target.id;
    const changedValue =
      attribute === "deadline" ? event.target.selected : event.target.value;
    const changedValueObject = {
      [attribute]: changedValue
    };

    // replace the property value in taskToEdit with the new value in changedValue
    Object.assign(this.state.taskToEdit, changedValueObject);
    // forces a re-render
    this.setState(this.state);
  };

  handleSubmit = () => {
    if (this.state.taskToEdit.title) {
      if (this.props.isEditable) {
        this.props.handleUpdate(this.props.taskToEdit);
      } else {
        this.props.addTaskToList(
          this.state.taskToEdit.title,
          this.state.taskToEdit.description,
          this.state.taskToEdit.date,
          this.state.taskToEdit.tags
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
              value={this.state.taskToEdit.title}
              placeholder="Enter your task here"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              id="description"
              label="Description"
              value={this.state.taskToEdit.description}
              placeholder="Enter the task description"
              onChange={this.handleChange}
            />
            <Form.Field
              control={DatePicker}
              id="deadline"
              label="Deadline"
              selected={this.state.taskToEdit.date}
              placeholder="Click here to select a date"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              id="tags"
              label="Tags"
              value={this.state.taskToEdit.tags}
              placeholder="Enter tags, separated by commas"
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <Form.Field control={Button} onClick={() => this.handleSubmit()}>
                Submit
              </Form.Field>
              <Form.Field
                control={Button}
                onClick={() => this.props.handleClose()}
              >
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
