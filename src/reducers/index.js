const initialState = {
    products: [
        { name: "Laptop", price: 1650, id: 1 },
        { name: "Mobile phone", price: 750, id: 2 },
        { name: "Car", price: 25350, id: 3 },
        { name: "House", price: 180000, id: 4 },
        { name: "Ak-74", price: 1200, id: 5 },
        { name: "Tetris", price: 8.50, id: 6 }
    ],
    cart: [],
    wishList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'TOGGLE_ITEM_TO_CART': {

            const itemInCart = state.cart.find(el => el.id === action.payload.id);

            const updatedCart = [...state.cart];

            if (!itemInCart) {
                updatedCart.push(action.payload)
            } else {
                return { ...state, cart: state.cart.filter(el => el.id !== action.payload.id) }
            };

            return { ...state, cart: updatedCart }
        }

        case 'TOGGLE_ITEM_TO_WISHLIST': {

            const itemInWishList = state.wishList.find(el => el.id === action.payload.id);

            const updatedWishList = [...state.wishList];

            if (!itemInWishList) {
                updatedWishList.push(action.payload)
            } else {
                return { ...state, wishList: state.wishList.filter(el => el.id !== action.payload.id) }

            };

            return { ...state, wishList: updatedWishList }
        }

        default:
            return state;
    }
}

export default reducer;
