import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { mockedMovies } from '../../../reducer/movies/service'
import ProductList from '.'

storiesOf('ProductList', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ProductList products={mockedMovies} />
  ))
  .add('loading', () => (
    <ProductList products={[]} />
  ))
