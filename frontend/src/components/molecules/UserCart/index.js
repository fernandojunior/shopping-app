import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../atoms/Icon'

export default ({ quantity = 0 }) => (
  <div style={{ display: 'inline-block' }}>
    <div style={{ float: 'left' }}>
      <Icon icon="cart" circle width={32} />
    </div>
    <p>Cart ({quantity})</p>
    { quantity > 0 && (
      <Link to="/pay/">
        Pay
      </Link>
    ) }
  </div>
)
