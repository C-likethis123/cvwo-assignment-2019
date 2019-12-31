import React from "react";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
      if (this.state.editable) {
          let name = this.name.value;
          let description = this.description.value;
          let id = this.props.fruit.id;
          let fruit = {
              id,
              name,
              description
          }

          this.props.handleUpdate(fruit);
      }
      this.setState({
          editable: !this.state.editable,
      });
  }

  render() {
    let name = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.name = input)}
        defaultValue={this.props.fruit.name}
      />
    ) : (
      <h3>{this.props.fruit.name}</h3>
    );

    let description = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.description = input)}
        defaultValue={this.props.fruit.description}
      />
    ) : (
      <p>{this.props.fruit.description}</p>
    );

    this.id = this.props.fruit.id;
    return (
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable ? "Submit" : "Edit"}</button>
        <button onClick={() => this.props.handleDelete(this.id)}>
          Delete Fruit
        </button>
      </div>
    );
  }
}

export default Fruit;
