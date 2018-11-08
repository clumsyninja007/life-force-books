import React, { Component } from 'react';

import normal from '../../images/buy_from_amazon.gif';
import faded from '../../images/buy_from_amazon_faded.gif';

class BuyFromAmazon extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer nofollow">
        <img
          src={faded}
          onMouseOver={amzn => (amzn.currentTarget.src = normal)}
          onMouseOut={amzn => (amzn.currentTarget.src = faded)}
          alt="Buy from amazon.com" 
        />
      </a>
    );
  }
}

export default BuyFromAmazon;