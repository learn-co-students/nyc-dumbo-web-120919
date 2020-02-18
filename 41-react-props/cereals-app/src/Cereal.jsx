import React from 'react';

const Cereal = (props) => {
  console.log(props);
  return(
    <li>{props.name}</li>
  )
};

export default Cereal;
