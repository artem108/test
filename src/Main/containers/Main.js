import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadProducts, selectProducts} from '../../actions/index'
import Products from '../components/Products'
import Cart from '../components/Cart'

class MainContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      choosedElements: [],
      sumItemsPrice: null
    }
      this.addToCart = this.addToCart.bind(this)
      this.calculateSum = this.calculateSum.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
    }

    addToCart(elements) {
      this.state.choosedElements.push(elements)
      this.setState({choosedElements: this.state.choosedElements})
      this.props.selectProducts(elements)
    }

    calculateSum(sum) {
      this.setState({sumItemsPrice: this.state.sumItemsPrice + sum})
    }

    deleteItem(item, totalPriceItem) {
      const arr = this.state.choosedElements
        delete arr[item]

      this.setState({choosedElements: this.state.choosedElements})
      this.setState({sumItemsPrice: this.state.sumItemsPrice - totalPriceItem})
    }

  render() {

    const {
      products
    } = this.props

    const items = this.state.choosedElements

    return (
      <section>
        <section style={{textAlign: 'left', width: '50%', maxHeight: '300px', margin: '0 auto'}}>
          <h2>Cart</h2>
            <section>
              {
                items.map((item, index) => {
                  return (
                    <Cart
                      key={index}
                      index={index}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      amount={item.amount}
                      calculateSum={this.calculateSum}
                      deleteItem={this.deleteItem}
                    />
                  )
                })
              }<br/>
            </section>
        </section>
        <section style={{display: 'flex', width: '50%', height: '50px', margin: '0 auto'}}>
          <h2>Total price: {this.state.sumItemsPrice}</h2>
        </section>
      <hr/>
         <section style={{display: 'flex', width: '50%', height: '100px', margin: '0 auto'}}>
           {
             products.map((product, index) => {
               return (
                 <Products
                   key={index}
                   id={product.id}
                   name={product.productName}
                   price={product.price}
                   addToCart={this.addToCart}
                 />
               )
             })
           }
         </section>
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
  return  bindActionCreators({selectProducts: selectProducts}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(MainContainer)
