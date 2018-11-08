import React, { Component } from 'react';
import './footer.css';

import {NavLink} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="pageFooter">
        <div>
          <p>© 2018 Life Force Books</p>
          <p>
            <NavLink
              exact={true}
              role="button"
              activeClassName="active"
              className="navLink"
              to="/disclaimer"
            >
              Disclaimer & Privacy Policy
            </NavLink> | Site Map
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
