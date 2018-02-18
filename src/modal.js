import React from 'react'
import './Modal.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isVisible: false, ...props}
    this.close = this.close.bind(this)
    this.backdropStyle = {
      position:   'absolute',
      width:      '100%',
      height:     '100%',
      top:        '0px',
      left:       '0px',
      zIndex:     '10',
      background: 'rgba(51,51,51,.45)',
      opacity:    '1'
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({...this.state, ...nextProps})
  }


  close(event) {
    event.preventDefault()
    this.setState({...this.state, isVisible: false})
  }


  render() {
    if (!this.state.isVisible) {
      return null
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={200}
            transitionLeaveTimeout={1}>
          <div key="foo" className="modal-container">
            <div className="modal-content" >
              <div className="circle red-background"><i class="icon-shopping-cart white-color"></i></div>
              <button className="close-button" onClick={this.close}>×</button>
              <h1>{this.state.modalTitle}</h1>
              {this.state.modalBody}
            </div>
            <div key="baz" style={this.backdropStyle} onClick={this.close}></div>
          </div>
        </ReactCSSTransitionGroup>

    )
  }
}

export default Modal
