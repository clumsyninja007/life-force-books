import React, { Component } from 'react';
import './image.css';

class Image extends Component {
  render() {
    return (
      <figure className="image">
        <a
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={this.props.image}
            width={this.props.width}
            height={this.props.height}
            alt={this.props.alt}
          />
        </a>
        <figcaption className="imageText">
          {this.props.caption}
        </figcaption>
      </figure>
    );
  }
}

export default Image;