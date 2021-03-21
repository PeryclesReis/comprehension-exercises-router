import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAcess from './StrictAcess';

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
            path="/strict-acess/:name/:senha"
            render={(props) => (
              <StrictAcess {...props} user={{username: 'joao', password: '1234'}} />
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