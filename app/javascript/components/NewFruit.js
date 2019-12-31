import React from "react";

class NewFruit extends React.Component {
  render() {
    let formFields = {};
    let handleFormSubmit = this.props.handleFormSubmit;
    return (
      <form onSubmit={ (e) => { e.preventDefault(); handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset(); }
    } >
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
