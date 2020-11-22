import React from 'react'
import { connect } from 'react-redux'

const Header = ({ wishList, cart }) => {
    return (
        <div>
            {
                <header>
                    <h2>Items in cart: {cart.length}</h2>
                    <h2>Wish List: {wishList.length}</h2>
                </header>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        wishList: state.wishList,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header);