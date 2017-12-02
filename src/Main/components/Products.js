import React, { Component } from 'react'

class Products extends Component {

  constructor(props) {
    super(props)
      this.onClick = this.onClick.bind(this)
    }

  onClick() {
      const id = this.props
      this.props.addToCart(id)
      }

  render() {

    const {
      name,
      price,
      id,
      addToCart
      } = this.props

    return (
      <section style={{width: '30%', textAlign: 'left'}}>
        <span>Name: {name}</span><br/>
        <span>Price: {price} usd </span>
        <button onClick={this.onClick}>Add to cart</button>

      </section>
    );
  }
}

export default Products
