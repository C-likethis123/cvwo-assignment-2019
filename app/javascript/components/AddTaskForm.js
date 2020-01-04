import React from "react";
import {Modal, Button} from "semantic-ui-react";

class AddTaskForm extends React.Component {
    render() {
        return(
            <Modal trigger={<Button className="add-button">Add a Task</Button>}>
                <Modal.Header>Add a Task</Modal.Header>
                <Modal.Content>TEST</Modal.Content>
            </Modal>
        );
    }
}

export default AddTaskForm;
