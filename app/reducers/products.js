import { ADD_PRODUCT, REMOVE_ITEM } from '../constants/ActionTypes'
import shop from '../api/products.js'

export default function productList(state = shop, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state.map((item) => {
        return item.id === action.id ? Object.assign({}, item, { added: true }) : item
      });

    case REMOVE_ITEM:
      return state.map((item) => {
        return item.id === action.product.id ? Object.assign({}, item, { added: false, quantity: 1 }) : item
      });

    default:
      return state
  }
}
