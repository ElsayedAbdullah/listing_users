import React, { Component } from "react";
import "./ListingUser.css";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";
import UsersList from "./UsersList";

class ListingUser extends Component {
  state = {
    registerUser: "",
    loginUser: "",
    isRegistered: false,
    isLogged: false,
    user: null,
    newUser: "",
    users: [
      { id: 1, name: "sayed", salary: 2000 },
      { id: 2, name: "zaki", salary: 3000 },
      { id: 3, name: "ahmed", salary: 1500 }
    ],
    isEdit: false
  };

  handleRegisterChange = e => {
    this.setState({
      registerUser: e.target.value
    });
  };

  handleLoginChange = e => {
    this.setState({
      loginUser: e.target.value
    });
  };

  // Submit Register Form
  handleRegisterSubmit = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.registerUser);
    this.setState({
      isRegistered: true
    });
  };

  // Submit Login Form
  handleLoginSubmit = e => {
    e.preventDefault();
    let loginUser = this.state.loginUser;
    let savedUser = localStorage.getItem("user");
    if (loginUser === savedUser) {
      this.setState({
        isLogged: true
      });
    } else {
      console.log("Error");
    }
  };

  // View User Details
  handleViewUser = user => {
    this.setState({
      user
    });
  };

  // Delete User
  handleDelete = id => {
    // clone
    let users = [...this.state.users];
    // edit
    users = users.filter(user => user.id !== id);
    // setState
    this.setState({
      users
    });
  };

  // add User
  addUser = () => {
    let users = [...this.state.users];
    users = [...this.state.users, { id: Math.random(), name: this.state.newUser, salary: Math.floor(Math.random() * 2000) }];
    this.setState({
      users
    });
  };

  editUser = (user, value) => {
    let { users } = this.state;
    user.name = value;
    this.setState({
      users
    });
  };

  handleChangeUser = e => {
    let newUser = this.state.newUser;
    newUser = e.target.value;
    this.setState({
      newUser
    });
  };

  handleSubmitUser = e => {
    e.preventDefault();
    this.setState({
      newUser: ""
    });
    this.addUser();
  };

  render() {
    return (
      <div className="app-wrapper">
        <h1>Listing User</h1>
        {this.state.isLogged ? (
          <div>
            <p className="text-center">Congrats🥳 you are logged in</p>
            <form className="form" onSubmit={this.handleSubmitUser}>
              <input type="text" required="required" onChange={this.handleChangeUser} placeholder="add user..." value={this.state.newUser} />
              <button className="btn btn-green">Add</button>
            </form>
            <br />
            <br />
            <br />
            <div className="users">
              {this.state.users.map((user, index) => (
                <UsersList key={user.id} index={index} users={this.state.users} handleViewUser={this.handleViewUser} handleDelete={this.handleDelete} user={user} editUser={this.editUser} />
              ))}
            </div>

            {this.state.user ? (
              <p className="preview">
                {this.state.user.name} - {this.state.user.salary}
              </p>
            ) : (
              ""
            )}
          </div>
        ) : this.state.isRegistered ? (
          <LoginUser handleLoginSubmit={this.handleLoginSubmit} handleLoginChange={this.handleLoginChange} loginUser={this.state.loginUser} />
        ) : (
          <RegisterUser handleRegisterSubmit={this.handleRegisterSubmit} registerUser={this.state.registerUser} handleRegisterChange={this.handleRegisterChange} />
        )}
      </div>
    );
  }
}

export default ListingUser;
