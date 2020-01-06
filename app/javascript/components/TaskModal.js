import React from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

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
              placeholder="Enter your task here"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              id="description"
              label="Description"
              placeholder="Enter the task description"
              onChange={this.handleChange}
            />
            <Form.Field
              control={DatePicker}
              id="deadline"
              label="Deadline"
              placeholder="Click here to select a date"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              id="tags"
              label="Tags"
              placeholder="Enter tags, separated by commas"
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <Form.Field control={Button} >
                Submit
              </Form.Field>
              <Form.Field
                control={Button}
                onClick={this.props.handleClose}
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
