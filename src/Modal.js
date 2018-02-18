import React from 'react'
import classnames from 'classnames'
import {BonsaiModal} from '@ithaka/bonsai/js/bonsai.modal'

const backgroundStyle = {opacity: 1, display: "block", 'zIndex': '300', "pointerEvents": 'auto'}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {visible: false, ...this.props}
    this.hide = this.hide.bind(this)
  }

  componentDidMount() {
    new BonsaiModal(window.$('.modal'))
  }

  hide() {
    this.setState({visible: false})
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({...this.props, ...nextProps})
  }

  render() {
    const classes = {
      "reveal": true,
      "modal":  true,
      "active": this.state.visible
    }


    return (
        <span>
          <div onClick={this.handleBackdropClick}
               style={backgroundStyle} data-toggle="">
          </div>
          <div id="default-modal" data-toggler="foobar" className={classnames(classes)} data-icon="shopping-cart"
               data-circle-color="alert">
            <h1>This is a modal!</h1>
            <p>Here is some body text.</p>
            <button className="close-button" data-close="" aria-label="Close modal" type="button">
                <span aria-hidden="true" onClick={this.hide}>&times;</span>
            </button>
            {this.props.children}
          </div>
	      </span>
    )
  }

  handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return
    }
    this.hide()
  }

}


export default Modal
