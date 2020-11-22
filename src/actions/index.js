export const toggleItemToCart = (item) => {
    return {
        type: 'TOGGLE_ITEM_TO_CART',
        payload: item
    }
}

export const toggleItemToWishList = (item) => {
    return {
        type: 'TOGGLE_ITEM_TO_WISHLIST',
        payload: item
    }
}
