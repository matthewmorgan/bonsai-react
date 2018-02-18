import {Component} from 'react';
import {BonsaiModal} from '@ithaka/bonsai/js/bonsai.modal';


class WrappedModal extends Component {

  componentDidMount(){
    new BonsaiModal(window.$('#modal-container'))
  }

  render(){
    return (
        <div id="modal-container"></div>
    )
  }
}

export default WrappedModal;