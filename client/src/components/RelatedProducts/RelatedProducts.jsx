import React from 'react';

class RelatedProducts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      variable: 'Hello!'
    }
  }

  render () {
    return (
      <p>{this.state.variable}</p>
    )
  }
}

export default RelatedProducts;
