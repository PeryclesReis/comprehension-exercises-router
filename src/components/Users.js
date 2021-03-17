import React, { Component } from 'react';
import { Route } from 'react-router';

class Users extends Component {

  render() {
    const { ship } = this.props.match.params;
    const Users = ({ greetingMessage = 'Hi There' }) => (
      <div>
        <h2>Users</h2>
        <p>{greetingMessage}, {this.props.name} {ship} </p>
      </div>
    );

    return (
      <div>
        <Route path='/users' component={Users} />
      </div>
    );
  }
};

export default Users;
