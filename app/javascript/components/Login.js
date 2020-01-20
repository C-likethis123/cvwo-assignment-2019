import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="sign-up">
          <h1>Sign In</h1>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Enter your email"></input>
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder="Enter a password"></input>
            </Form.Field>
            <Button type="submit">Sign In</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
