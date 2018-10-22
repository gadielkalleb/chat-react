import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className="container-2 w-container">
      <form className="lobby" method="post">
        <h1 className="heading">Seja bem-vindo</h1>
        <div>Informe seu nome para começar:</div>
        <input className="div-block-3" name="name" style={{ "width": "100%" }}/><br/>
        <input type="submit" className="w-button" value="Entrar" />
      </form>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
