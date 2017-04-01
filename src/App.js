import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Home, About, Topic, Topics } from './components'
import { Link, Route } from './router'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/topics" component={ Topics } />
      </div>
    );
  }
}

export default App;
