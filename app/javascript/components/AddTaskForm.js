import React from "react";
import { Modal, Button, Form, Input } from "semantic-ui-react";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
    }
  }

  handleChange = () => {
      const value = event.target.value;
      const attribute = event.target.id;
      const changedValue = {
          [attribute]: value,
      }

      this.setState(changedValue);
  }

  render() {
    return (
      <Modal trigger={<Button className="add-button">Add a Task</Button>}>
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
          </Form>
          <Form.Field control={Button} onClick={() => this.props.addTaskToList(this.state.title)}>
              Submit
            </Form.Field>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddTaskForm;
