import { combineReducers } from 'redux'

import { actionTypes } from './actions'

let currentCart = {
  owner: 'http://127.0.0.1:8000/users/1/',
  'credit_card_number': null, // eslint-disable-line
  'credit_card_name': null, // eslint-disable-line
  'credit_card_expiration_date': null, // eslint-disable-line
  'order_items': [] // eslint-disable-line
}

function productStoreReducer(state = { products: null }, action) {
  switch (action.type) {
    case actionTypes.FIND_PRODUCT_SUCCESS:
      return {
        products: action.products
      }
    default:
      return state
  }
}

function cartStoreReducer(state = { cart: currentCart }, action) {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      if (currentCart && action.cart_item) {
        currentCart.order_items.push(action.cart_item)
      }
      return { cart: currentCart }
    case actionTypes.GET_CART:
      return { cart: currentCart }
    case actionTypes.PAY_SUCCESS:
      currentCart = {
        owner: 'http://127.0.0.1:8000/users/1/',
        'credit_card_number': null, // eslint-disable-line
        'credit_card_name': null, // eslint-disable-line
        'credit_card_expiration_date': null, // eslint-disable-line
        'order_items': [] // eslint-disable-line
      }
      return { cart: currentCart }
    default:
      return state
  }
}

const reducers = {
  productStore: productStoreReducer,
  cartStore: cartStoreReducer
}

export default combineReducers(reducers)
