import React, { Component } from 'react';

class InnerLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer" className={this.props.className}>
        {this.props.content}
      </a>
    );
  }
}

export default InnerLink;