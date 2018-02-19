import React from 'react'
import {BonsaiDropdownMenu} from '@ithaka/bonsai/js/bonsai.dropdownmenu'


class DropdownMenu extends React.Component {

  // manipulate the DOM _after_ React has done its work
  // this attaches the Foundation listeners to the appropriate controls (by class or id) in the DOM
  componentDidMount() {
    new BonsaiDropdownMenu(window.$('.dropdown'))
  }

  render() {

    return (
        <span>
          <ul className="dropdown menu" data-dropdown-menu>
            <li>
              <a href="#">Item 1</a>
              <ul className="menu">
                <li><a href="#">Item 1A</a></li>
                <li><a href="#">Item 1B</a></li>
                <li><a href="#">Item 1C</a></li>
              </ul>
            </li>
            <li className="menu-item"><a href="#">Item 2</a></li>
            <li className="menu-item"><a href="#">Item 3</a></li>
          </ul>
        </span>
    )
  }
}


export default DropdownMenu
