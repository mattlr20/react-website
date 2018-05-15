import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/koann-1.jpg" className="about-profile-pic" rounded />
            <h3>About</h3>
            <p>Hello there. My name is Ko-Ann, and thanks for stopping by!</p>
            <p>I live in Hollister, NC. I love to capture the emotions we all go through as people, particularly, those in love. My personal mission for each and every one of my clients is to create a time capsule of images for you and your loved ones to cherish for a lifetime.
              I see beauty in all people and strive to make my clients feel comfortable in front of the camera in order to capture you at your best. Love is in the details. With every milestone in life, big or small, it deserves extra attention. I am committed to your special day because the only thing that matters is you. Trusting me to capture and share the making of memories is something I deeply appreciate.
              I will provide an unforgettable experience by documenting your love with everything I have as if it were my own. After the moments have come and gone, I want my images to tell your love story and take your breath away over and over again.
              Your love is one of a kind, and it would give me great pleasure to help you share it.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}