import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>About</h3>
            <p></p>
          </Col>
        </Grid>
      </div>
    )
  }
}