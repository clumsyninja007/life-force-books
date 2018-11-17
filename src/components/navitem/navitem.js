import React, { Component } from 'react';
import './navitem.css';

import {NavLink} from 'react-router-dom';

import InnerLink from '../innerLink';

function RenderLink(props) {
  if (props.location) {
    return (
      <NavLink
        exact={true}
        role="button"
        activeClassName="active"
        className="navLink"
        to={props.location}
      >
        {props.text}
      </NavLink>
    );
  }
  else if (props.href) {
    return (
      <InnerLink
        content={props.text}
        className="navLink"
        href={props.href}
      />
    );
  }
}

class Navitem extends Component {
  render() {
    return (
      <li className="navitem">
        <RenderLink location={this.props.location} href={this.props.href} text={this.props.text} />
        <div className="dropdownContent">
          {this.props.dropdown}
        </div>
      </li>
    );
  }
}

export default Navitem;
