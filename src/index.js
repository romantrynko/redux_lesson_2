import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';




const initialState = {
  products: [
    { name: 'Product1', price: 20.05, id: 1 },
    { name: 'Product2', price: 15.99, id: 2 },
    { name: 'Product3', price: 12.59, id: 3 }
  ],
  cart: [],
  likedList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemInCart = state.cart.find(el => el.id === action.payload.id);

      const updatedCart = [...state.cart];

      if (!itemInCart) updatedCart.push(action.payload);

      return { ...state, cart: updatedCart };
    }

    case 'REMOVE_FROM_CART': {
      return { ...state, cart: state.cart.filter(el => el.id !== action.payload.id) }
    }
    case 'ADD_TO_LIKED':
      return { ...state, }
    case 'REMOVE_FROM+LIKED':
      return { ...state, }
    default:
      return state;
  }
}

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
