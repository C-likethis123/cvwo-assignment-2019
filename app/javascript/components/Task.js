import React from "react";
import { Checkbox, Button, Icon } from "semantic-ui-react";
import TaskModal from "./TaskModal";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: Object.assign({}, this.props.task),
      isModalOpen: false,
    }
  }

  handleClick = (e, { checked }) => {
    this.setState(() => ({
      isCompleted: checked,
    }), () => {
      const updatedTask = Object.assign({}, this.state);
      this.props.handleUpdate(updatedTask);
    });
  };

  render() {
    return (
      <div className="item" key={this.props.task.id}>
        <Checkbox onClick={this.handleClick} />
        {this.props.task.title}
        <Button
          icon
          size="mini"
          onClick={() => this.setState({isModalOpen: true}) }
        >
          <Icon name="edit"></Icon>
        </Button>
        <Button
          icon
          size="mini"
          color="red"
          onClick={() => this.props.handleDelete(this.state)}
        >
          <Icon name="trash"></Icon>
        </Button>
        <TaskModal
          isEditable={true}
          isModalOpen={this.state.isModalOpen}
          handleAdd={this.props.handleAdd}
          handleClose={() => this.setState({isModalOpen: false})}
        />
      </div>
    );
  }
}

export default Task;
