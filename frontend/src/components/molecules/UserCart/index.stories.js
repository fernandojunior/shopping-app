import React from 'react'
import { storiesOf } from '@storybook/react'
import UserCart from '.'

storiesOf('UserCart', module)
  .add('UserCart quantity=1', () => (
    <UserCart 1 />
  ))
  .add('UserCart', () => (
    <UserCart />
  ))
