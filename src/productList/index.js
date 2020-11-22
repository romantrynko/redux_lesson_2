import React from 'react'
import { connect } from 'react-redux'


import Product from '../product';

const ProductList = ({ products }) => {

    return (
        <div>
        {products.map(product => (
            <Product product={product} key={product.id}/>
              ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
  }

export default connect(mapStateToProps)(ProductList)