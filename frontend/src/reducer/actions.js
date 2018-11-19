import StoreService from '../services/StoreService'

export const actionTypes = {
  FIND_PRODUCT_SUCCESS: 'FIND_PRODUCT_SUCCESS',
  ADD_CART_ITEM: 'FIND_PRODUCT_SUCCESS',
  PAY_SUCCESS: 'PAY_SUCCESS'
}

export const findProductRequest = () => (async (dispatch) => {
  await StoreService.create_products()
  const products = await StoreService.findProducts()
  return dispatch({ type: actionTypes.FIND_PRODUCT_SUCCESS, products })
})

export const addCartItemRequest = (product_url, price = 1.0, quantity = 1) => (async (dispatch) => {
  return dispatch({ type: actionTypes.ADD_CART_ITEM, cart_item: { product: product_url, price, quantity } })
})

export const getCartRequest = () => (async (dispatch) => {
  return dispatch({ type: actionTypes.GET_CART })
})

export const payRequest = (cart) => (async (dispatch) => {
  await StoreService.pay(cart)
  return dispatch({ type: actionTypes.PAY_SUCCESS })
})
