import React, { Component, Fragment } from "react";

class UsersList extends Component {
  state = {
    isEdit: false
  };

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    });
  };

  renderUser = () => {
    return (
      <div className="user-item">
        <span onClick={() => this.props.handleViewUser(this.props.user)}>{this.props.user.name}</span>
        <div>
          <button onClick={() => this.toggleState()} className="btn btn-violet">
            Edit
          </button>
          <button onClick={() => this.props.handleDelete(this.props.user.id)} className="btn delete-btn">
            Delete
          </button>
        </div>
      </div>
    );
  };

  updateUser = e => {
    e.preventDefault();
    this.props.editUser(this.props.user, this.input.value);
    this.toggleState();
  };

  renderEditUser = () => {
    return (
      <form className="update-form" onSubmit={this.updateUser}>
        <input type="text" ref={v => (this.input = v)} defaultValue={this.props.user.name} />
        <button onClick={this.updateUser}>Update</button>
      </form>
    );
  };

  render() {
    return <Fragment>{this.state.isEdit ? this.renderEditUser() : this.renderUser()}</Fragment>;
  }
}

export default UsersList;
