import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About - Hollister, NC Portraits &amp; Weddings Photography | KoAnn Photography</title>
            <meta name="description" content="Hello there. My name is Ko-Ann, and thanks for stopping by! I do wedding photography in Hollister, NC, Halifax County, Warren County, and Nash County." />
        </Helmet>
        <Grid>
          <Col xs={12} sm={7}>
            <h1>About Me</h1>
            <p>Hello there. My name is Ko-Ann, and thanks for stopping by!</p>
            <p>I live in Hollister, NC. I love to capture the emotions we all go through as people, particularly, those in love.</p>
            <p>My personal mission for each and every one of my clients is to create a time capsule of images for you and your loved 
              ones to cherish for a lifetime. I see beauty in all people and strive to make my clients feel comfortable in front of 
              the camera in order to capture you at your best. Love is in the details. With every milestone in life, big or small, 
              it deserves extra attention. I am committed to your special day because the only thing that matters is you. Trusting 
              me to capture and share the making of memories is something I deeply appreciate.
              I will provide an unforgettable experience by documenting your love with everything I have as if it were my own. After 
              the moments have come and gone, I want my images to tell your love story and take your breath away over and over again.</p>
            <p>Your love is one of a kind, and it would give me great pleasure to help you share it.</p>
          </Col>
          <Col xs={12} sm={5}>
            <Image src="assets/koann-1.jpg" className="about-profile-pic" />
          </Col>
        </Grid>
      </div>
    )
  }
}