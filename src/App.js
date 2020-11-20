import React from 'react';
import './App.css';

import { connect } from 'react-redux';

function App({ products, cart, removeItemFromCart, addItemToCart }) {
  const handleItemClick = (item) => {
    if (cart.find(el => el.id === item.id)) {
      removeItemFromCart(item)
    } else {
      addItemToCart(item)
    }
  }

  return (
    <div className='App'>
      <h1 onClick={() => { }}>Cart items: {cart.length}</h1>
      <ul>
        {products.map(product => (
          <li className={cart.find(el => el.id === product.id) ? 'highlight' : ''} key={product.id} onClick={() => handleItemClick(product)}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  }
}

const addItemToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}

const removeItemFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item
  }
}

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(App);
