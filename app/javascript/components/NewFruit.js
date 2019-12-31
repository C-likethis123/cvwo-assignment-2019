import React from "react";

class NewFruit extends React.Component {
  render() {
    let formFields = {};
    return (
      <form>
        <input
          ref={input => (formFields.name = input)}
          placeholder="Enter the name of the fruit"
        />

        <input
          ref={input => (formFields.description = input)}
          placeholder="Enter a description"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewFruit;
