import React, { Component } from 'react';
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        {this.props.navs}
        <div className="clearfix"></div>
      </nav>
    );
  }
}

export default Navbar;
