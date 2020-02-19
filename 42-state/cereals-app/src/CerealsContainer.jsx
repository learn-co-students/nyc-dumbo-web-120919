import React from 'react'
import Cereal from './Cereal'

function CerealsContainer(props){

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        <Cereal cerealName="Lucky Charms"
          personName="Eric"
          bool={true}
          arr={[1,2,3]}
          func={() => {}}
          obj={{hello: "120919"}}
          num={1}/>
        <Cereal cerealName="Cinnamon Toast Crunch" personName="Gracie" />
        <Cereal cerealName="Chocos" personName="Mazen"/>
        <Cereal cerealName="Flax Seed" personName="Michelle"/>
        <Cereal />
      </ul>
    </div>
  )

}




export default CerealsContainer
