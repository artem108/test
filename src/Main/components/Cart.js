import React, { Component } from 'react'
import { RevealPRight, RevealPLeft, MainText, Title }  from './../../styled/Home.style'
import { Texts, RadarStyle }  from './../../styled/AbouteMe.style'

class Cart extends Component {

  render() {
    const {
      name,
      price,
      id,
    } = this.props
    return (
      <section style={{width: '100%', display: 'flex'}}>
        <span>{name}</span>
         <span>{price}</span>
        </section>
    );
  }
}

export default Cart
