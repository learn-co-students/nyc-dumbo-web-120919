import React from 'react';
import {Card} from 'semantic-ui-react'
import BritCard from './BritCard'

import {connect} from 'react-redux'
// connect is a function

const BritContainer = (props) => {
  return (
    <Card.Group>
      {props.people.map(person => <BritCard key={person.name} brit={person} />)}
    </Card.Group>
  )
};

// export default connect()(BritContainer);

// the return value of mapStateToProps is an object
// that object gets merged into the component's props
const mapStateToProps = (applicationState) => {
  return {
    people: applicationState.brits,
  }
}

let functionName = connect(mapStateToProps)
let magicalComponent = functionName(BritContainer)

export default magicalComponent





















//
