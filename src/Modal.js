import React from 'react'
import {BonsaiModal} from '@ithaka/bonsai/js/bonsai.modal'


class Modal extends React.Component {

  // manipulate the DOM _after_ React has done its work
  // this attaches the Foundation listeners to the appropriate controls (by class or id) in the DOM
  componentDidMount() {
    new BonsaiModal(window.$('.modal'))
  }

  render() {

    return (
        <span>
          <div id="default-modal" data-toggler="foobar" className="reveal modal" data-icon="shopping-cart"
               data-circle-color="alert">
            <h1>{this.props.title}</h1>
            <p>{this.props.bodyText}</p>
            {/* need the verbose data-close="" to work around an incompatibility between React and Foundation */}
            <button className="close-button" data-close="" aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
	      </span>
    )
  }

}


export default Modal
