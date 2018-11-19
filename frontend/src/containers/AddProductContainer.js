import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as qs from 'query-string'
import { addCartItemRequest as addCartItemRequestAction } from '../reducer/actions'

class MovieDetailContainer extends Component {
  componentWillMount() {
    const { addCartItemRequest, match, cart } = this.props
    const urlQuery = qs.parse(location.search) // eslint-disable-line

    if ('url' in urlQuery ) {
      addCartItemRequest(urlQuery.url)
    }

    this.props.history.push({
      pathname: '/',
      search: '?'
    })    
  }

  render() {
    return (
      <div>
        Product added
      </div>
    )
  }
}

const mapStateToProps = ({ cartStore }) => ({
  cart: cartStore.cart
})

const mapDispatchToProps = (dispatch, { done }) => ({
  addCartItemRequest: (product_url) => {
    dispatch(addCartItemRequestAction(product_url)).then(done, done)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer)
