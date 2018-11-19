import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import './index.css'

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

class ProductPoster extends Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  toggleHover(hover) {
    this.setState({ hover })
  }

  render() {
    const { url, image_url, name, price, showInfo, width, height } = this.props
    const { hover } = this.state

    imageStyle.width = width
    imageStyle.height = height

    if (showInfo && hover) {
      imageStyle.opacity = 0.5
      imageStyle.borderadius = '3px'
      imageStyle.backgroundColor = '#000000'
    } else {
      imageStyle.opacity = null
      imageStyle.borderadius = null
      imageStyle.backgroundColor = null
    }

    return (
      <div className="ProductPoster" onMouseOver={() => this.toggleHover(true)}
        onMouseLeave={() => this.toggleHover(false)}
      >
        <Image style={imageStyle} key={url} src={image_url} responsive />

        { showInfo && hover && (
          <div className="PosterInfo">
            <div className="t5">{name}</div>
            <div className="t7">{price}</div>
          </div>
        )
        }
      </div>
    )
  }
}

export default ProductPoster
