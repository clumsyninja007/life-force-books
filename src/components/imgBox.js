import React, { Component } from 'react';
import '../styles/imgbox.css';

class ImgBox extends Component {
  render() {
    return (
      <figure className="imageBox">
        <img
          src={this.props.image}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt}
        />
        <figcaption className="imageText">
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
        </figcaption>
      </figure>
    );
  }
}

export default ImgBox;