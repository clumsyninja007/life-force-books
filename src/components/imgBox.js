import React, { Component } from 'react';
import '../styles/imgbox.css';

class ImgBox extends Component {
  render() {
    return (
      <div className="imageBox">
        <img src={this.props.image} />
        <p>This is a guidebook to using The Secret of the Golden Flower (SGF) as a meditation method for activating kundalini. An authoritative interpretation by someone, who, unlike Jung, Cleary, or Wilhelm, actually used the method to activate kundalini. This book compares their translations and commentaries with JJ Semple's empirical practice of the method.</p>
      </div>
    );
  }
}

export default ImgBox;