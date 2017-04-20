import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProduct } from '../actions/ShoppingCart'
import * as ShoppingCartActions from '../actions/ShoppingCart'

const details = {
	product : {
			textAlign:'left',
			margin: '20px',
			backgroundColor: '#f9f9f9',
			padding:'20px',
	    border: "1px solid #dfdfdf"
	},

		title:{
			color:'#1c1c1c',
			textDecoration:'none',
			fontSize:'20px',
			margin:'15px 0',
			display:'block'
		},
}

class ProductDetails extends Component {
	constructor (props, context) {
		 super(props, context);
		this.state = {
		 product: Object.assign({}, this.props.product)
	 };
	}

	render () {
		return (
		<div style={details.product}>
		 <h3>Product Details</h3>
		 <img src={this.props.product.thumbnail}/>
		 <p style={details.title}>{this.props.product.title}</p>
		 <p>Price: {this.props.product.price}</p>
		 <p>{this.props.product.inStock?"In Stock":"Out OF Stock"}</p>
		 <p>{this.props.product.description}</p>
	 </div>
 )
}

}
ProductDetails.propTypes = {
  actions: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
}

function getProductById(products, id) {
  const product = products.filter(product => product.id == id);
  if (product) return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id; // from the path `/product/:id`
 let product = {id: '', thumbnail: '', title: '', price: '', quantity: ''};
 if (productId && state.products.length > 0) {
   product = getProductById(state.products, productId);
 }

 return {
   product: product
 };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addProduct }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails)
