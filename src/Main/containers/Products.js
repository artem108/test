import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Products from '../components/Products'

class ProductsContainer extends Component {
  render() {
    const {
      products,
      addToCart
    } = this.props

    return (
      <section   style={{display: 'flex', width: '50%', height: '100px', margin: '0 auto'}}>
        {
          products.map((product, index) => {
            return (
              <Products
                key={index}
                id={product.id}
                name={product.productName}
                price={product.price}
                addToCart={addToCart}
              />
            )
          })
        }
      </section>
    );
  }
}

export default ProductsContainer
