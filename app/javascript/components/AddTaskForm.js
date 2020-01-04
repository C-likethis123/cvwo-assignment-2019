import React from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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
    this.props.addTaskToList(this.state.title, this.state.description);
    this.setState({ isModalOpen: false });
  };

  handleOpen = () => {
    console.log("handleOpen");
    this.setState({ isModalOpen: true });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button className="add-button" onClick={() => this.handleOpen()}>
            Add a Task
          </Button>
        }
        open={this.state.isModalOpen}
      >
        <Modal.Header>Add a Task</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              control={Input}
              id="title"
              label="Title of Task"
              placeholder="Enter your task here"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              id="description"
              label="Description of Task"
              placeholder="Enter the task description"
              onChange={this.handleChange}
            />
          </Form>
          <Form.Field control={Button} onClick={() => this.handleSubmit()}>
            Submit
          </Form.Field>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddTaskForm;
