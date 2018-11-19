import StoreService from '../services/StoreService'

export const actionTypes = {
  FIND_PRODUCT_SUCCESS: 'FIND_PRODUCT_SUCCESS',
  ADD_CART_ITEM: 'FIND_PRODUCT_SUCCESS',
  PAY_SUCCESS: 'PAY_SUCCESS'
}

export const findProductRequest = () => (async (dispatch) => {
  await StoreService.loadProducts()
  const products = await StoreService.findProducts()
  return dispatch({ type: actionTypes.FIND_PRODUCT_SUCCESS, products })
})

export const addCartItemRequest = (productUrl, price = 1.0, quantity = 1) => async dispatch => (
  dispatch({ type: actionTypes.ADD_CART_ITEM, cart_item: { product: productUrl, price, quantity } })
)

export const getCartRequest = () => async dispatch => (
  dispatch({ type: actionTypes.GET_CART })
)

export const payRequest = (cart, success, errorCallback) => (async (dispatch) => {
  try {
    await StoreService.pay(cart)
    success()
    return dispatch({ type: actionTypes.PAY_SUCCESS })
  } catch (error) {
    let errorStr = ''
    if ('data' in error) {
      errorStr = Object.keys(error.data).map(k => `${k}: ${error.data[k][0]}`).join(',')
    }

    errorCallback(errorStr)
    throw error
  }
})
