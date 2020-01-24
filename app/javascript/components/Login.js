import React from "react";
import { Message, Form, Button } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasError: false
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

  handleLogIn = () => {
    const userCredentials = {
      email: this.state.email,
      password: this.state.password
    };
    fetch(`users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify({ user: userCredentials })
    }).then(response => {
      if (response.ok) {
        // go to user's id
        response.json().then(user => {
          Cookies.set('user_id', user.id);
          window.location = "http://localhost:3000";
        });
      } else {
        this.setState(() => ({ hasError: true }));
      }
    });
  };

  render() {
    const errorMessages = this.state.hasError ? (
      <Message error header="Your username/password is invalid" />
    ) : null;
    return (
      <div className="container">
        <div className="sign-up">
          {errorMessages}
          <h1>Sign In</h1>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={this.handleChange}
              ></input>
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter a password"
                onChange={this.handleChange}
              ></input>
            </Form.Field>
            <Button
              type="submit"
              onClick={this.handleLogIn}
              onChange={this.handleChange}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
