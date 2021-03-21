import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route
            path="/users/:id"
            render={(props) =>(
              <Users {...props}
              greetingMessage="Good Morning"
              />
            )}
          />
          <Route path="/about" >
            <About />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route
            path="/strict-acess/"
            render={(props) => (
              <StrictAccess {...props} user={{username: 'joao', password: '1234'}} />
            )}
          />
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-acess">Acesso restrito</Link>
      </BrowserRouter>
    );
  }
}

export default App;
