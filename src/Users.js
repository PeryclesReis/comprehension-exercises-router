import React from 'react';
import { Route } from 'react-router';

class Users extends React.Component {

  render() {
    const { id } = this.props.match.params;
    const Users = ({ greetingMessage = 'Hi there' }) => (
      <div>
        <h2> Users </h2>
        {greetingMessage}, this is my {id} awesome Users component.
      </div>
    );
    return (
      <div>
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default Users;