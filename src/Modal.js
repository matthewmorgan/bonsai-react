import React from 'react'
import {BonsaiModal} from '@ithaka/bonsai/js/bonsai.modal'


class Modal extends React.Component {

  componentDidMount() {
    new BonsaiModal(window.$('.modal'))
  }

  render() {

    return (
        <span>
          <div id="default-modal" data-toggler="foobar" className="reveal modal" data-icon="shopping-cart"
               data-circle-color="alert">
            <h1>This is a modal!</h1>
            <p>Here is some body text.</p>
            <button className="close-button" data-close="" aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
	      </span>
    )
  }

}


export default Modal
