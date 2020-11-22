import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import {addToCart, removeFromCart, mapStateToProps} from './actions'

function App({ products, cart, addToCart, removeFromCart }) {


  const handleItemOnClick = (item) => {
    if (!!cart.find((el) => el.id === item.id)) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className='App'>
      <h2>Items in cart: {cart.length}</h2>
      {products.map(product => (
        <div
          key={product.id}
          onClick={() => handleItemOnClick(product)}
        >
          {product.id}. {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart
})(App);
