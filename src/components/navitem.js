import React, { Component } from 'react';
import '../styles/navitem.css';

import {NavLink} from 'react-router-dom';

class Navitem extends Component {
  render() {
    return (
      <NavLink
        exact={true}
        role="button"
        activeClassName="active"
        className="navLink"
        to={this.props.location}
      >
        <li className="navitem">
          {this.props.text}
        </li>
      </NavLink>
    );
  }
}

export default Navitem;
