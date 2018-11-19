import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as qs from 'query-string'
import { addCartItemRequest as addCartItemRequestAction } from '../reducer/actions'

class MovieDetailContainer extends Component {
  componentWillMount() {
    const { addCartItemRequest, history } = this.props
    const urlQuery = qs.parse(location.search) // eslint-disable-line

    if ('url' in urlQuery) {
      addCartItemRequest(urlQuery.url)
    }

    history.push({ pathname: '/', search: '?' })
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
  addCartItemRequest: (productUrl) => {
    dispatch(addCartItemRequestAction(productUrl)).then(done, done)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer)
