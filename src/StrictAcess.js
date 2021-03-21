import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;
    const { name, senha } = this.props.match.params;
    if (username !== name|| password !== senha){
      alert('Acesso Negado!');
      return <Redirect to="/" />
    }

    return (
      <div>
        Acesso estrito aos seus dado!
      </div>
    );
  }
}

export default StrictAcess;
