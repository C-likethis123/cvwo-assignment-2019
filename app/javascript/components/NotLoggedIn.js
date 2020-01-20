import React from "react";
import { Message } from "semantic-ui-react";

class NotLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Message>
        <Message.Header>
            You are not logged in yet
        </Message.Header>
        <p>
            You can create, update and delete tasks but they will not be saved when you close this window.
        </p>
        <p>
        <a href="/signup">Sign Up</a> to save your changes, or <a href="/login">Log In</a> to view your tasks.
        </p>
      </Message>
    );
  }
}

export default NotLoggedIn;
