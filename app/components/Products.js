import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProduct } from '../actions/ShoppingCart'
import { Router, Route, Link, IndexRoute } from 'react-router'

const productList = {
	productGrid : {
		width:'80%',
		margin:'20px auto'
	},

	price:{
		color:'red'
	},

	title:{
		color:'#1c1c1c',
		textDecoration:'none',
		fontSize:'20px',
		margin:'15px 0',
		display:'block'
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
		cursor:'pointer'
	},

	productItem : {
		width:'20%',
		float:'left',
		margin:'20px 10px',
		padding:'20px 10px',
		backgroundColor: '#f9f9f9',
    textAlign: 'center',
    border: "1px solid #dfdfdf"
	},
	myCart:{
		fontSize:'24px',
		color:'red',
		float:'right',
		clear:'both'
	}
}

class Products extends Component {
	constructor () {
		super ();
	}

	addToCart (id, prod) {
    	this.props.addProduct(id, prod);
  	}

	render () {
		const { products, shoppingCart,  addProduct } = this.props
		return (
			<div>
			  <div>
		        <Link  to="/cart" style={productList.myCart}>My Cart <span >({shoppingCart.addedCounter})</span></Link>
		      </div>
					<div style={productList.productGrid}>
		      {
		        products.map((prod) => {
		          return(
									 					<div style={productList.productItem} key={prod.id} >
														 	<img src={prod.thumbnail}/>
						                   <div>
																	<Link to={'detail/'+ prod.id} style={productList.title}>{prod.title}</Link>
																	<p style={productList.price}>Price: ${prod.price}</p>
				                    		</div>
						                    <div>
						                    	{!prod.added && <button onClick={this.addToCart.bind(this,prod.id, prod)} style={productList.btn}>Add to Cart</button>}
						                    	{prod.added && <button disabled style={productList.btn}>Added To Cart</button>}
						                    </div>
		                  			</div>
											);
		                }
									)
		      	}
						</div>
      		</div>
		)
	}
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  shoppingCart: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.products,
    shoppingCart : state.shoppingCart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProduct }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
