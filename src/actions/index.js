export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}

export const addToWishList = (item) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: item
    }
}

export const removeFromWishList = (item) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: item
    }
}
