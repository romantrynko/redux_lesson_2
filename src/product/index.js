import React from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart, addToWishList, removeFromWishList } from '../actions'

const Product = ({ product, cart, wishList, addToCart, removeFromCart, addToWishList, removeFromWishList }) => {

    const handleItemOnClick = (item) => {
        if (!!cart.find((el) => el.id === item.id)) {
            removeFromCart(item);
        } else {
            addToCart(item);
        }
    };

    const handleWishList = (item) => {
        if (!!wishList.find(el => el.id === item.id)) {
            removeFromWishList(item)
        } else {
            addToWishList(item)
        }
    }

    return (
        <div>
            <div
                key={product.id}
            >
                {product.id}. {product.name} - {product.price}
                <br />
                <button onClick={() => handleItemOnClick(product)}>Add to cart</button>
                <button onClick={() => handleWishList(product)}>Like</button>
                <hr />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        wishList: state.wishList
    }
  }

export default connect(mapStateToProps, {
    addToCart,
    removeFromCart,
    addToWishList,
    removeFromWishList
})(Product);
