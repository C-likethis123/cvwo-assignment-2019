import React from "react";
import { Checkbox, Button, Icon } from "semantic-ui-react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.task);
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
          onClick={() => /* open here */{} }
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
