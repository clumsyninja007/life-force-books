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
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flifeforcebooks%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1918725474853471"
            width="340"
            height="500"
            style={{border:'none', overflow:'hidden'}}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Life Force Books Facebook Timeline"
          >
          </iframe>
        </aside>
      </div>
    );
  }
}

export default Sidebar;