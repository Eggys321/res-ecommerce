import React from 'react';
import Hero from '../pages/Hero';

const Home = ({ cartItem, setCartItems, handleAddToCart }) => {
  return (
    <div>
      <Hero
        handleAddToCart={handleAddToCart}
        cartItem={cartItem}
        setCartItem={setCartItems}
      />
    </div>
  )
}

export default Home