import React, { Component } from 'react';
import SignupWidget from './signupWidget';
import '../styles/sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>{this.props.content}</div>
        <aside>
          <SignupWidget />
          <h2>
            Kundalini Consortium TV
          </h2>
          <iframe 
            title="Episode 10: Turmeric & Death"
            width="304" 
            height="171"
            src="https://www.youtube.com/embed/iNcWG_b8uQc"
          />
          <h2>
            Our Facebook Page
          </h2>
          <div className="fb-page" data-href="https://www.facebook.com/lifeforcebooks/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/lifeforcebooks/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/lifeforcebooks/">
                Life Force Books
              </a>
            </blockquote>
          </div>
        </aside>
      </div>
    );
  }
}

export default Sidebar;