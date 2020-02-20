import React from 'react'
import Cereal from './Cereal'

function CerealsContainer(props){

  let arrayOfCerealComponents = props.cereals.map((cerealObj, index, originalArray) => {
    return <Cereal
       key={cerealObj.id}
       cereal={cerealObj}
       deleteOneCereal={props.deleteOneCereal}
       updateOneCereal={props.updateOneCereal}
      />
  })

  return (
    <div>
      <h2>{props.title}</h2>
      { arrayOfCerealComponents }
    </div>
  )

}




export default CerealsContainer
