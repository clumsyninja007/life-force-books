import React, { Component } from 'react';
import './footer.css';

import InnerLink from '../innerLink';

class Footer extends Component {
  render() {
    return (
      <footer className="pageFooter">
        <div>
          <p>
            © 2018 Life Force Books
            <br />
            <InnerLink content="Disclaimer & Privacy Policy" href="/disclaimer" />
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
