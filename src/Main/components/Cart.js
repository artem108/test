import React, { Component } from 'react'

const padding = {
  paddingLeft: '10px'
}

class Cart extends Component {

  constructor(props) {
   super(props);
   this.state = {
     totalPrice: this.props.price
   }
 }

   componentWillMount() {
     this.props.calculateSum(this.props.price)
   }

   handleChange(event) {
      const amount = Number(event.target.value)
      const price = Number(this.props.price)
      const totalPrice = amount * price

      this.setState({totalPrice: totalPrice})

        this.props.calculateSum(price)
   }

   delete() {
     this.props.deleteItem(this.props.index, this.state.totalPrice)
   }
    render() {
      const {
        name,
        price,
        id,
        calculateSum,
        deleteItem
      } = this.props

      return (
        <section style={{width: '100%', display: 'flex', textAlign: 'left'}}>
          <span> Name: {name}</span>
           <span style={padding}> Prise: {price}</span>
            <span style={padding}> Amount:
                <input
                  type="number"
                   style={{width: '30px'}}
                   ref={(input) => { this.textInput = input; }}
                   pattern="\d*"
                   defaultValue={1}
                   onChange={this.handleChange.bind(this)}
                 />
              </span>
           <span style={padding}> Total price: {this.state.totalPrice}</span>
           <button style={{marginLeft: '10px'}} onClick={this.delete.bind(this)}><i className="fa fa-trash-o"></i></button>
         </section>
      );
    }
  }

export default Cart
