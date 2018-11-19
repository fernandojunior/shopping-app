import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import Icon from '../../atoms/Icon'
import ProductPoster from '../../molecules/ProductPoster'
import './index.css'

export default (props) => {
  const { products, title } = props

  const shape = { width: '156px', height: '234px' }

  const productViews = (products || []).map(product => (
    <Col className="desktop" xs={2} key={product.imdbID}>
      <Link to={`/add-product/?url=${product.url}`}>
        <ProductPoster {...({ ...product, ...shape })} showInfo responsive />
      </Link>
    </Col>
  ))

  return (
    <div className="ProductList">
      <Grid fluid={false}>
        <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col xs={12}>
            <div className="t3 opacity50">
              {(title || 'Online Movie Shopping')}
            </div>
          </Col>
          { productViews.length > 0 && productViews }
        </Row>
      </Grid>
    </div>
  )
}
