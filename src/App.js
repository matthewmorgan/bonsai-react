import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';


class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" className="button" data-reveal data-open="default-modal">Click me for a modal!</button>
        <Modal/>
      </div>
    );
  }
}


export default App;
