import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import Reviews from './components/Reviews/Reviews';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/signup" component={LogIn} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/reviews" component={Reviews} />
      </React.Fragment>
    );
  }
}

export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
