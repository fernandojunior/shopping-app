import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Icon from '../../atoms/Icon'
import UserCart from '../../molecules/UserCart'
import './index.css'

const Logo = () => (
  <Icon icon="logo" width={128} height={32} />
)

export default ({ cart }) => (
  <div className="NavBar">
    <Grid fluid={false}>
      <Row style={{ display: 'flex', flexWrap: 'wrap' }} className="column">
        <Col xs={6} sm={4}>
          <Logo />
        </Col>
        <Col xsHidden sm={4} />
        <Col xsHidden sm={4}>
          <div style={{ float: 'right' }}>
            <UserCart quantity={cart.order_items.length} showName />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)
