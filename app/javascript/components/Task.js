import React from "react";
import { Checkbox, Button, Icon } from "semantic-ui-react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
  }

  handleClick = (e, { checked }) => {
    this.state.isCompleted = checked;
    this.props.handleUpdate(this.state);
  };

  render() {
    return (
      <div className="item" key={this.props.task.id}>
        <Checkbox onClick={this.handleClick} />
        {this.props.task.title}
        <Button
          icon
          size="mini"
          onClick={() => this.props.openModal(this.state, true)}
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
      </div>
    );
  }
}

export default Task;
