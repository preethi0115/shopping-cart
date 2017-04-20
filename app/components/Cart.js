import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShoppingCartActions from '../actions/ShoppingCart'

const cart = {
	margin : '10px auto',
	padding : '10px',
	width : '70%',
	border : '2px solid',
	table : {
		width : '100%',
		backgroundColor: '#f9f9f9',
		textAlign: 'center',
		border: "1px solid #dfdfdf",
		clear:'both'
	},
	column : {
		padding:'20px',
		border:'solid 1px dfdfdf'
	},
	btn:{
		color:'#ffffff',
		backgroundColor:'rgba(21, 19, 19, 0.75)',
		borderRadius: '4px',
		padding:'10px 21px',
		textTransform:'uppercase',
		outline:'1px solid transparent',
		border:'0 none',
		height:'40px',
		cursor:'pointer',
		float:'right',
		margin:'20px'
	},
}


class Cart extends Component {
	constructor () {
		super ();
	}

	increaseQuant (prod) {
	    this.props.actions.increaseQuant(prod);
	}

	decreaseQuant (prod) {
	    this.props.actions.decreaseQuant(prod);
	}

	removeItem (prod) {
	    this.props.actions.removeItem(prod);
	}

	render () {
		const {shoppingCart, actions} = this.props;
		return (
	      <div>
	          <div>
	          <table style={cart.table} >
            		<thead>
            			<tr>
            				<th  style={cart.column}>Item</th>
            				<th  style={cart.column}>Quantity</th>
            				<th style={cart.column}>Increase Quantity</th>
            				<th style={cart.column}>Decrease Quantity / Remove Item</th>
										<th style={cart.column}>Price</th>
            			</tr>
            		</thead>
            		<tbody>
			            {
			              shoppingCart.items.map((prod) => {
			                return <tr key={prod.id}>
			                          <td>{prod.title}</td>
			                          <td>{prod.quantity}</td>
			                          <td><button onClick={this.increaseQuant.bind(this,prod)}>+</button></td>
			                          <td>{prod.quantity > 1 && <button onClick={this.decreaseQuant.bind(this,prod)}>-</button>}
			                          {prod.quantity <= 1 && <button onClick={this.removeItem.bind(this,prod)}>x</button>}</td>
																 <td>${prod.price}</td>
			                        </tr>
			              })
			            }
									<tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td></td>
									<td>Subtotal:{shoppingCart.total}</td>
									</tr>
			        </tbody>
			    </table>
					<div><button style={cart.btn}>Checkout</button></div>
	          </div>
	       </div>
		)
	}
}

Cart.propTypes = {
  actions: PropTypes.object.isRequired,
  shoppingCart: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    shoppingCart : state.shoppingCart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ShoppingCartActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
