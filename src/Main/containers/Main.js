import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loadProducts from '../../actions/index'
import Main from '../components/Main'
import ProductsContainer from './Products'
import CartContainer from './Cart'

class MainContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      choosedElements: []
    }
      this.addToCart = this.addToCart.bind(this)
    }

    addToCart(elements) {
      this.state.choosedElements.push(elements)
      this.setState({choosedElements: this.state.choosedElements})
    }

  render() {

    const {
      products
    } = this.props

    const items = this.state.choosedElements
    console.log('main ', items);
    return (
      <section>
        <Main/>
        {items}
        <CartContainer
          selectedItems={items}
         />
        <ProductsContainer
          products={products}
          addToCart={this.addToCart}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products:state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  selectHome: bindActionCreators(loadProducts, dispatch)
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(MainContainer)
