import React, { Component } from 'react';

class InnerLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        {this.props.content}
      </a>
    );
  }
}

export default InnerLink;