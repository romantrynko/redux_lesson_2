const reducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'ADD_TO_CART': {
        const itemInCart = state.cart.find(el => el.id === action.payload.id);
  
        const updatedCart = [...state.cart];
  
        if (!itemInCart) updatedCart.push(action.payload);
  
        return { ...state, cart: updatedCart }
      }
  
      case 'REMOVE_FROM_CART': {
        return {...state, cart: state.cart.filter(el => el.id !== action.payload.id)}
      }
  
      case 'ADD_TO_LIKED': {
        return {...state, }
      }
  
      case 'REMOVE_FROM_LIKED': {
        return {...state, }
      }
  
      default:
        return state;
    }
  }

  const initialState = {
    products: [
      { name: "product_1", price: 10.88, id: 1 },
      { name: "product_2", price: 11.88, id: 2 },
      { name: "product_3", price: 12.88, id: 3 }
    ],
    cart: [],
    likedList: []
  };

export default reducer;