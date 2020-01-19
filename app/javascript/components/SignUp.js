import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = event => {
    const attribute = event.target.id;
    const changedValue = event.target.value;
    this.setState(() => {
      return {
        [attribute]: changedValue
      };
    });
  };

  handleSignUp = () => {
      const newUser = Object.assign({}, this.state);
      console.log(newUser);
      fetch(`/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: newUser}),
      })
        .then(response => {
            console.log(response.json());
        });
  }

  render() {
    return (
      <div className="container">
        <div className="sign-up">
          <h1>Sign Up</h1>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Enter your email" type="email" id="email" onChange={this.handleChange}></input>
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input placeholder="Enter a password" type="password" id="password" onChange={this.handleChange}></input>
            </Form.Field>

            <Form.Field>
              <label>Confirm Password</label>
              <input
                placeholder="Enter your password again"
                id="password-confirmation"
                type="password"
              ></input>
            </Form.Field>
            <Button onClick={this.handleSignUp}>Sign Up</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUp;
