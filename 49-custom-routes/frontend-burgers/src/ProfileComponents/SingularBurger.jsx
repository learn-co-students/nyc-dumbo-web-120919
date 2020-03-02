import React from 'react';

const SingularBurger = (props) => {

  const handleClick = (e) => {
    console.log(props);
  }

  return (
    <li>
      {props.burger.name} - <button onClick={handleClick}>x</button>
    </li>
  )
}

export default SingularBurger;
