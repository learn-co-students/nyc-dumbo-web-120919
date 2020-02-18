import React from 'react'
import Cereal from './Cereal'

class CerealsContainer extends React.Component{

  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          <Cereal name="Frosted Flakes"
            bool={true}
            arr={[1,2,3]}
            func={() => {}}
            obj={{hello: "120919"}}
            num={1}/>
          <Cereal name="Frosted Flakey"/>
          <Cereal name="Frosted"/>
          <Cereal name="Frosty"/>
          <Cereal name="Fro"/>
        </ul>
      </div>
    )
  }
}


export default CerealsContainer
