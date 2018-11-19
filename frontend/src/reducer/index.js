import { combineReducers } from 'redux'

import { actionTypes } from './actions'

let current_cart = {
    "owner": "http://127.0.0.1:8000/users/1/",
    "credit_card_number": null,
    "credit_card_name": null,
    "credit_card_expiration_date": null,
    "order_items": [
    ]
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

function cartStoreReducer(state = { cart: current_cart }, action) {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      if (current_cart && action.cart_item)
      		current_cart.order_items.push(action.cart_item)
      return {
        cart: current_cart
      }
    case actionTypes.GET_CART:
      return {
        cart: current_cart
      }

    case actionTypes.PAY_SUCCESS:
      current_cart = {
		    "owner": "http://127.0.0.1:8000/users/1/",
		    "credit_card_number": null,
		    "credit_card_name": null,
		    "credit_card_expiration_date": null,
		    "order_items": [
		    ]
		}
      return {
        cart: current_cart
      }
    default:
      return state
  }
}

const reducers = {
  productStore: productStoreReducer,
  cartStore: cartStoreReducer
}

export default combineReducers(reducers)
