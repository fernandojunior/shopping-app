import React from 'react'
import { Image } from 'react-bootstrap'
import './index.css'

export default ({ icon, circle, width, height }) => {
  const style = {
    width: width || height,
    height: height || width,
    objectFit: 'contain'
  }
  return (
    <Image circle={circle} src={`/public/icons/${icon}.svg`} style={style} />
  )
}
