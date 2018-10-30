import React, { Component } from 'react';

class OuterLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer nofollow">
        {this.props.content}
      </a>
    );
  }
}

export default OuterLink;