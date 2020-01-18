import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<Segment className="sign-up">
        <h1>Sign Up</h1>
      <Form>
        <Form.Field>
          <label>Username or Email</label>
          <input placeholder="Enter your username or email"></input>
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter a password"></input>
        </Form.Field>
        
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="Enter your password again"></input>
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Segment>);
  }
}

export default SignUp;
