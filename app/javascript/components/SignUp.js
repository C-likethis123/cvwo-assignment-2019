import React from "react";
import { Message, Form, Button } from "semantic-ui-react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      messages: [],
      isError: false,
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
    //   const key = Cookies.get('user_key');
    const newUser = Object.assign({}, this.state);
    fetch(`/api/v1/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: newUser })
    }).then(response => {
      if (response.ok) {
        this.setState(() => ({
            messages: ["Your registration is successful. Sign in to view your tasks!"],
            isError: false,
        }));
      } else {
        response.json().then(errors => {
          const errorArray = [];
          for (const component in errors) {
            errorArray.push(`${component}: ${errors[component]}`);
          }
          this.setState(() => ({ messages: errorArray, isError: true }));
        });
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="sign-up">
          {this.state.messages.length == 0 ? null : (
            <Message
              error={this.state.isError}
              header="There are some problems with your registration"
              list={this.state.messages}
            />
          )}
          <h1>Sign Up</h1>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Enter your email"
                type="email"
                id="email"
                onChange={this.handleChange}
              ></input>
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Enter a password"
                type="password"
                id="password"
                onChange={this.handleChange}
              ></input>
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
