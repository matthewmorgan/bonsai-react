import React from 'react'
import {BonsaiTooltip} from '@ithaka/bonsai/js/bonsai.tooltip'


class Tooltip extends React.Component {

  // manipulate the DOM _after_ React has done its work
  // this attaches the Foundation listeners to the appropriate controls (by class or id) in the DOM
  componentDidMount() {
    new BonsaiTooltip(window.$('.has-tip'))
  }

  render() {

    return (
        <p>
          <span className="has-tip" data-tooltip="" title="I contain useful information!">Tooltips</span> should contain useful information.
          <button data-tooltip="" aria-haspopup="true" className="button secondary has-tip" data-disable-hover="false" tabIndex="0" title="I'm a button tooltip. Look at my cursor!">
            This does something cool
          </button>
        </p>
    )
  }
}


export default Tooltip
