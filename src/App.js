import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Modal from './BonsaiWrappers/Modal'
import DropdownMenu from './BonsaiWrappers/DropdownMenu'
import Tooltip from './BonsaiWrappers/Tooltip'


class App extends Component {

  render() {

    const title = "I am a modal"
    const bodyText = "This is a paragraph in the modal body."

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="row">
            <DropdownMenu/>
          </div>
          <button type="button" className="button" data-reveal data-open="default-modal">Click me for a modal!</button>
          <Modal title={title} bodyText={bodyText}/>
          <Tooltip
              buttonText={"This does something cool"}
              buttonTipTitle={"I'm a button tool tip!"}
              linkTipTitle={"I'm a tooltip!"}/>
        </div>
    )
  }
}


export default App
