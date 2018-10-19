import React, { Component } from 'react';
import '../styles/header.css';

import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div className="tagline">
            <p>{this.props.tagline}</p>
          </div>
          <div className="banner">
            <NavLink exact={true} role="button" activeClassName="active" className="navLink" to="/"><img src={this.props.mainLogo}/></NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
