import React from 'react'
import { connect } from 'react-redux';
import { toggleItemToCart, toggleItemToWishList } from '../actions'
import './index.css'

const Product = ({ cart, product, wishList, toggleItemToCart, toggleItemToWishList }) => {

    return (
        <div>
            <div
                key={product.id}
                className='product'
            >
                {product.id}. {product.name} - Price: $ {product.price}
                <br />
                <button
                    className={cart.find(el => el.id === product.id) ? 'cartAdd' : ''}
                    onClick={() => toggleItemToCart(product)}>Add to cart</button>
                <button
                    className={wishList.find(el => el.id === product.id) ? 'wishListAdd' : ''}
                    onClick={() => toggleItemToWishList(product)}>Like</button>
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
    toggleItemToCart,
    toggleItemToWishList
})(Product);
