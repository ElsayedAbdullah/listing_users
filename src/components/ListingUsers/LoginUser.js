import React, { Component } from "react";

class LoginUser extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.handleLoginSubmit}>
        <input type="text" placeholder="login user" onChange={this.props.handleLoginChange} value={this.props.loginUser} />
        <button className="btn btn-violet" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default LoginUser;
