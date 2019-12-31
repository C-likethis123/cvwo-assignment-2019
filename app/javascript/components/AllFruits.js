import React from "react";
import Fruit from "./Fruit";

class AllFruits extends React.Component {
  render() {
    var fruits = this.props.fruits.map(fruit => {
      return (
        <div key={fruit.id}>
          <Fruit
            fruit={fruit}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
      );
    });
    return <div>{fruits}</div>;
  }
}

export default AllFruits;
