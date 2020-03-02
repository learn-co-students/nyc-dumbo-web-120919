import React from 'react';

const Burger = (props) => {
  let {burger} = props

  const handleClick = (e) => {
    props.addBurgerToOrder(burger)
  }

  return (
    <div className="burger">
      <h3 className="burger_title">{burger.name}</h3>
        <img src={burger.image} alt={burger.name}/>
        <p className="burger_description">
          {burger.description}
        </p>
        <button className="button" onClick={handleClick}>Add to Order</button>
    </div>

  )
}

export default Burger;
