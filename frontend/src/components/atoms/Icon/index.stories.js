import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const icons = [
  'avatar',
  'logo'
]

const stories = storiesOf('atoms/Icon', module)

icons.forEach(icon => stories.add(`Icon ${icon}`, () => (
  <Icon icon={icon} height="24px" />
)))
