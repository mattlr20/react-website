import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';
import './Weddings.css';

export default class Weddings extends Component {
  constructor(props) {
    super(props);
    this.hideActiveModal = this.hideActiveModal.bind(this);
  }
  
  hideActiveModal = () => {
    const modal = document.getElementsByClassName('modal-backdrop fade in')[0];
    if (modal != null)
     modal.className =''; 
  };
  render() {
    this.hideActiveModal();
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Weddings</h3>
            <p>Weddings</p>
          </Col>
        </Grid>
      </div>
    )
  }
}