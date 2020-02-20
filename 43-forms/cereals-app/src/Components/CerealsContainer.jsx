import React from 'react'
import Cereal from './Cereal'

function CerealsContainer(props){

  let arrayOfCerealComponents = props.cereals.map((cerealObj) => {
    return <Cereal key={cerealObj.id} cereal={cerealObj} />
  })

  return (
    <div>
      <h2>{props.title}</h2>
      { arrayOfCerealComponents }
    </div>
  )

}




export default CerealsContainer
