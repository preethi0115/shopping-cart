import * as types from '../constants/ActionTypes'

export function addProduct(id, product) {
  return { type: types.ADD_PRODUCT, id, product }
}

export function increaseQuant (product) {
	return {type : types.INCREASE_QUANTITY, product}
}

export function decreaseQuant (product) {
	return {type: types.DECREASE_QUANTITY, product}
}

export function removeItem (product) {
	return {type: types.REMOVE_ITEM, product}
}
