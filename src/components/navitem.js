import React, { Component } from 'react';
import '../styles/navitem.css';

import {NavLink} from 'react-router-dom';

class Navitem extends Component {
  render() {
    return (
      <li className="navitem">
        <NavLink
          exact={true}
          role="button"
          activeClassName="active"
          className="navLink"
          to={this.props.location}
        >
          {this.props.text}
        </NavLink>
      </li>
    );
  }
}

export default Navitem;
