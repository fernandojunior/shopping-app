import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { payRequest as payRequestAction } from '../reducer/actions'

class PayForm extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      creditCardNumber: null,
      creditCardName: null,
      creditCardExpirationDate: null,
      wasPayed: false,
      error: null
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange1(event) {
    this.setState({ creditCardNumber: event.target.value })
  }

  handleChange2(event) {
    this.setState({ creditCardName: event.target.value })
  }

  handleChange3(event) {
    this.setState({ creditCardExpirationDate: event.target.value })
  }

  async handleSubmit() {
    const { cart, payRequest } = this.props
    const { creditCardNumber, creditCardName, creditCardExpirationDate } = this.state
    cart.credit_card_number = creditCardNumber
    cart.credit_card_name = creditCardName
    cart.credit_card_expiration_date = creditCardExpirationDate

    const successCallback = () => {
      this.setState({ wasPayed: true })
    }
    const errorCallback = (error) => {
      this.setState({ wasPayed: false, error: `Please, fill the inputs correctly \n ${error}` })
    }

    payRequest(cart, successCallback, errorCallback)
  }

  render() {
    const {
      wasPayed,
      creditCardNumber,
      creditCardName,
      creditCardExpirationDate,
      error
    } = this.state

    return (
      <div>
        { wasPayed === false
          && (
            <form onSubmit={this.handleSubmit}>
              credit card number:
              <input style={{ color: 'black' }} type="text" name="credit_card_number" onChange={this.handleChange1} />
              credit card name:
              <input style={{ color: 'black' }} type="text" name="credit_card_name" onChange={this.handleChange2} />
              credit card exp. date (yyyy-mm-dd):
              <input style={{ color: 'black' }} type="text" name="credit_card_expiration_date" onChange={this.handleChange3} />
              <br />
              {
                creditCardNumber != null
                && creditCardName != null
                && creditCardExpirationDate != null
                && (<input style={{ color: 'black' }} type="button" onClick={this.handleSubmit} value="Pay!" />)
              }
              {error}
            </form>
          )
        }
        <br />
        {
          wasPayed && ('Cart products were ordered! ')
        }
        <br />
        <Link to="/"> Back </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ cartStore }) => ({
  cart: cartStore.cart
})

const mapDispatchToProps = (dispatch, { done }) => ({
  payRequest: (cart, successCallback, errorCallback) => {
    dispatch(payRequestAction(cart, successCallback, errorCallback)).then(done, done)
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(PayForm)
