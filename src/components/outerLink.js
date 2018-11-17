import React, { Component } from 'react';

class OuterLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer nofollow" className={this.props.className}>
        {this.props.content}
      </a>
    );
  }
}

export default OuterLink;