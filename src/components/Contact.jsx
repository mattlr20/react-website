import React, { Component } from 'react';
import { Grid, Col, Button, Image, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
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
            <form action="https://formspree.io/richardson.webdev@gmail.com" method="POST">
              <FormGroup
                controlId="email">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="your@email.com"
                  name="_replyto" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="fullname">
                <ControlLabel>Full name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Jane Doe"
                  name="name" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="phonenumber">
                <ControlLabel>Your Phone Number</ControlLabel>
                <FormControl
                  type="text"
                  name="phone"
                  placeholder="123 456 7890" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="eventdate">
                <ControlLabel>Event Date</ControlLabel>
                <FormControl
                  type="text"
                  name="eventdate"
                  placeholder="MM/DD/YYYY" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="location">
                <ControlLabel>Locaction</ControlLabel>
                <FormControl
                  type="text"
                  name="location"
                  placeholder="Hollister, NC" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="guestcount">
                <ControlLabel>Estimated Guest Count</ControlLabel>
                <FormControl
                  type="text"
                  name="guestcount" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="budget">
                <ControlLabel>Estimated Budget</ControlLabel>
                <FormControl
                  type="text"
                  name="budget"
                  placeholder="$1000" />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="description">
                <ControlLabel>Tell me about your event</ControlLabel>
                <FormControl
                  type="text"
                  name="description" />
                <FormControl.Feedback />
              </FormGroup>
              <Button type="submit">Send</Button>
            </form>
          </Col>
        </Grid>
      </div>
    )
  }
}