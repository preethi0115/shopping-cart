import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'

const container = {
  width : '100%',
  margin : '0 auto',
  'textAlign' : 'center',
  
  list : {
    'listStyle' : 'none',
    background : 'rgba(21, 19, 19, 0.75)',
    color:'#fff',
    padding : '10px',
    height:'40px'
  },

  brandLink: {
      fontSize:'20px',
      float:'left',
      display:'block',
      textTransform:'uppercase'
  },

  navLinks: {
      fontSize:'20px',
      float:'right',
      padding:'10px',
      display:'block'
  },

  noTextDecoration : {
    textDecoration : 'none',
    color : 'white'
  }
}

class App extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div style={container}>
        <ul style={container.list}>
          <li style={container.brandLink}><Link style={container.noTextDecoration} to="/">Shopping Cart </Link></li>
          <li style={container.navLinks}><Link style={container.noTextDecoration} to="/products">Products</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
