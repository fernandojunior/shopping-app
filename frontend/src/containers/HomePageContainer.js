import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as qs from 'query-string'
import ProductList from '../components/organisms/ProductList'
import NavBar from '../components/organisms/NavBar'
import { findProductRequest as findProductRequestAction } from '../reducer/actions'
import { getCartRequest as getCartRequestAction } from '../reducer/actions'

class HomePageContainer extends Component {

  componentWillMount() {
    const { findProductRequest, match } = this.props
    const urlQuery = qs.parse(location.search) // eslint-disable-line
    findProductRequest()
    getCartRequestAction()
  }

  render() {
    const { products, cart } = this.props

    return (
      <div>
        <NavBar cart={cart} />
        <ProductList products={products} />
      </div>
    )
  }
}

const mapStateToProps = ({ productStore, cartStore }) => ({
  products: productStore.products,
  cart: cartStore.cart
})

const mapDispatchToProps = (dispatch, { done }) => ({
  findProductRequest: () => {
    dispatch(findProductRequestAction()).then(done, done)
  },
  getCartRequest: () => {
    dispatch(getCartRequestAction()).then(done, done)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
