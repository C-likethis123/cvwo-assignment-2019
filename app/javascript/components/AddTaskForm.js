import React from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: new Date(),
      isModalOpen: false
    };
  }

  handleChange = () => {
    const value = event.target.value;
    const attribute = event.target.id;
    const changedValue = {
      [attribute]: value
    };

    this.setState(changedValue);
  };

  handleSubmit = () => {
    if (this.state.title) {
      this.props.addTaskToList(
        this.state.title,
        this.state.description,
        this.state.date,
        this.state.tags
      );
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    return (
      <Modal
        trigger={
          <Button
            className="add-button"
            onClick={() => this.setState({ isModalOpen: true })}
          >
            Add a Task
          </Button>
        }
        open={this.state.isModalOpen}
      >
        <Modal.Header>Add a Task</Modal.Header>
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
              selected={this.state.date}
              placeholder="Click here to select a date"
              todayButton="today"
              onChange={date => {
                this.setState({ date: date });
              }}
            />
            <Form.Field
              control={Input}
              id="tags"
              label="Tags"
              placeholder="Enter tags, separated by commas"
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <Form.Field control={Button} onClick={() => this.handleSubmit()}>
                Submit
              </Form.Field>
              <Form.Field
                control={Button}
                onClick={() => this.setState({ isModalOpen: false })}
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

export default AddTaskForm;
