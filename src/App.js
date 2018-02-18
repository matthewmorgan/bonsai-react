import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './modal';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {modalIsVisible: false, ...this.props};
    this.handleModalClick=this.handleModalClick.bind(this);
  }

  handleModalClick() {
    this.setState({modalIsVisible: true})
  }
  render() {
    const modalBody = (
        <div>
          <p>Here's some body text.</p>
        </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="button" onClick={this.handleModalClick}>Show a modal</button>
        <Modal isVisible={this.state.modalIsVisible} modalTitle="This is not a Bonsai modal" modalBody={modalBody}></Modal>
      </div>
    );
  }
}


export default App;
