import React, { Component } from 'react';
import './imgBox.css';

import InnerLink from '../innerLink';

class ImgBox extends Component {
  render() {
    return (
      <figure className="imageBox">
        <InnerLink
          content={
            <img
              src={this.props.image}
              style={{width:this.props.width,height:this.props.height}}
              alt={this.props.alt}
            />
          }
          href={this.props.href}
        />
        
        <figcaption className="imageBoxText">
          <h3><InnerLink content={this.props.title} href={this.props.href} /></h3>
          {this.props.body}
        </figcaption>
      </figure>
    );
  }
}

export default ImgBox;