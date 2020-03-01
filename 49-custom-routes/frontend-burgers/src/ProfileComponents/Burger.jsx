import React from 'react';

const Burger = () => {
  return (
    <div className="burger">
      <h3 className="burger_title">Good Burger</h3>
        <img src="https://www.lovelesscafe.com/uploads/recipeimages/BBQBaconBurger-web.jpg" alt="Good Burger"/>
        <p className="burger_description">
          What a Good Burger!
        </p>
        <button className="button">Add to Order</button>
    </div>

  )
}

export default Burger;
