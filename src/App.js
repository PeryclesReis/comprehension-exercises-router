import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about' component={About} />
        <Route
          path='/users/:ship'
          render={ (props) =>(
          <Users {...props} name="this is my awaesome Users component" />) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
