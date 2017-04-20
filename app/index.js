import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './stores/configureStore'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

const store = configureStore()

render(
  <Provider store={store}>
	  <Router>
	    <Route path="/" component={App}>
	      <IndexRoute component={Products}/>
	      <Route path="products" component={Products} />
	      <Route path="cart" component={Cart} />
        <Route path="detail/:id" component={ProductDetails}/>
	    </Route>
	  </Router>
  </Provider>,
  document.getElementById('root')
)
