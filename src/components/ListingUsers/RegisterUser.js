import React, { Component } from "react";

class RegisterUser extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.handleRegisterSubmit}>
        <input type="text" required placeholder="register user" onChange={this.props.handleRegisterChange} value={this.props.registerUser} />
        <button className="btn btn-violet" type="submit">
          Register
        </button>
      </form>
    );
  }
}

export default RegisterUser;
