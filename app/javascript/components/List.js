import React from "react";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['HELLO', 'BYE']
    };
  }

  render() {
    let tasks = this.state.tasks.map(task => {
      return <div>{task}</div>;
    });
    return (
      <div className="todo-list" key={this.props.id}>
        <div className="todo-list-title">{this.props.title}</div>
        <div className="items-container">
            {tasks}
        </div>
      </div>
    );
  }
}

export default List;
