import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

class CartContainer extends Component {

  render() {
    const {
      selectedItems,
    } = this.props
    console.log(selectedItems);
    return (
        <section style={{width: '50%', height: '100px', margin: '0 auto'}}>
          <h2>Cart</h2>
            <section>
              {
                selectedItems.map((item, index) => {
                  console.log('item', item.name);
                  return (
                    <Cart
                      key={index}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                    />
                  )
                })
              }<br/>
            </section>
        </section>
    );
  }
}
export default CartContainer
