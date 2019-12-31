import React from "react";

class Fruit extends React.Component {
  render() {
      this.id = this.props.fruit.id;
    return (
      <div>
        <h1>{this.props.fruit.name}</h1>
        <p>{this.props.fruit.description}</p>
        <button onClick={()=>this.props.handleDelete(this.id)}>Delete Fruit</button>
      </div>
    );
  }
}

export default Fruit