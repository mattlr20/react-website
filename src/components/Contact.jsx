import React, { Component } from 'react';
import { Grid, Col, Button, Image, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <Grid>
        <h3>Contact</h3>
          <Col xs={12} sm={6}>
            <Image src="assets/koann-1.jpg" className="contact-profile-pic" />
            <div className="contact-info">
              <p>Email:</p>
              <p>KoAnnPhotography@gmail.com</p>
            </div>
          </Col>
        <Col xs={12} sm={6}>
          <form>
            <FormGroup
              controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="fullname">
              <ControlLabel>Full name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="phonenumber">
              <ControlLabel>Your Phone Number</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="eventdate">
              <ControlLabel>Event Date</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="location">
              <ControlLabel>Locaction</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="guestcount">
              <ControlLabel>Estimated Guest Count</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="budget">
              <ControlLabel>Estimated Budget</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="description">
              <ControlLabel>Tell me about your event</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter text" />
              <FormControl.Feedback />
            </FormGroup>
            <Button>Send</Button>
          </form>
        </Col>
      </Grid>
    )
  }
}