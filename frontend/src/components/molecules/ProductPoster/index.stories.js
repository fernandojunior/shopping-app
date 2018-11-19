import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductPoster from '.'

const product = JSON.parse('{"imdbID":"tt0083658","Title":"Blade Runner","Year":"1982","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"}')

storiesOf('ProductPoster', module)
  .add('default', () => (
    <ProductPoster {...product} />
  ))
