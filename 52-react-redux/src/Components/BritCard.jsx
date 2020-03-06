import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'


class BritCard extends Component {

  render() {
    return (
      <Card
        image={this.props.brit.image}
        header={this.props.brit.name}
        description={this.props.brit.job}
      />
    );
  }

}

export default BritCard;
