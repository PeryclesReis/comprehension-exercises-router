import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Link to="/strict-access">Strict Access</Link>
        <Switch>
          <Route
            path='/users/:ship'
            render={ (props) => (
              <Users {...props} name="this is my awaesome Users component" />
              )
            }
          />
          <Route path='/about' component={About} />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAccess user={ { username: 'joao', password: '1234' } } />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
