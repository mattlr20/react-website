import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';
import './Portraits.css';

export default class Portraits extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Portraits</h3>
            <p>Portraits</p>
          </Col>
        </Grid>
      </div>
    )
  }
}