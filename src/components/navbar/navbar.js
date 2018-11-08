import React, { Component } from 'react';
import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarClass: "navbar" };
    this.mobileMenu = this.mobileMenu.bind(this);
  }

  mobileMenu() {
    this.state.navbarClass === "navbar" ? this.setState({navbarClass: "navbar responsive"}) : this.setState({navbarClass: "navbar"});
  }

  render() {
    return (
      <nav className={this.state.navbarClass}>
        <button className="icon" onClick={this.mobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {this.props.navs}
      </nav>
    );
  }
}

export default Navbar;
