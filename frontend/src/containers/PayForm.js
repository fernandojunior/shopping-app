import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { payRequest as payRequestAction } from '../reducer/actions'

class PayForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credit_card_number: null,
      credit_card_name: null,
      credit_card_expiration_date: null,
      was_payed: false,
      error: null
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange1(event) {
    this.setState({credit_card_number: event.target.value});
  }
  handleChange2(event) {
    this.setState({credit_card_name: event.target.value});
  }
  handleChange3(event) {
    this.setState({credit_card_expiration_date: event.target.value});
  }

  async handleSubmit() {
    const { cart } = this.props
    cart.credit_card_number = this.state.credit_card_number
    cart.credit_card_name = this.state.credit_card_name
    cart.credit_card_expiration_date = this.state.credit_card_expiration_date

    const successCallback = () => {
      this.setState({was_payed: true});
    }
    const errorCallback = (error) => {
      this.setState({was_payed: false, error: `Please, fill the inputs correctly \n ${error}`});
    }

    this.props.payRequest(cart, successCallback, errorCallback)
  }

  render() {
    return (
      <div>
      { this.state.was_payed == false &&
        (
          <form onSubmit={this.handleSubmit}>
          <label >credit card number:</label>
          <input style={{ color: 'black' }} type="text" name="credit_card_number" onChange={this.handleChange1} />
          <label>credit card name:</label>
          <input style={{ color: 'black' }} type="text" name="credit_card_name" onChange={this.handleChange2} />
          <label>credit card exp. date (yyyy-mm-dd):</label>
          <input style={{ color: 'black' }} type="text" name="credit_card_expiration_date" onChange={this.handleChange3} />
          <br/>
          {
            this.state.credit_card_number != null && this.state.credit_card_name != null && this.state.credit_card_expiration_date != null &&
            (
              <input  style={{ color: 'black' }} type="button" onClick={this.handleSubmit} value="Pay!" />
            )
          }
          {this.state.error}
        </form>
        )
      }
      <br/>
        {
          this.state.was_payed && ("Cart products were ordered! ")
        }
        <br/>
        <Link to={'/'}>
          Back
        </Link>
      </div>
    );
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
