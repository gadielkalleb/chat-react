import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login'
import Rooms from './Rooms'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  render() {
    return (
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/rooms' component={Rooms} />
      </Router>
    );
  }
}

export default App
