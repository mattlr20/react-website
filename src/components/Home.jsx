import React, { Component } from 'react'
import { Grid, Col, Carousel } from 'react-bootstrap';
// import * as FontAwesome from 'react-icons/lib/fa'
import {Helmet} from "react-helmet";
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hollister, NC Portraits &amp; Weddings Photography | KoAnn Photography</title>
            <meta name="description" content="Wedding and Portrait Photography in Hollister, NC, Halifax County and Nash County." />
        </Helmet>
        <Grid className="home">
          <Carousel className="home-carousel">
            <Carousel.Item>
              <img alt="carousel-1" src="assets/homecarousel/newborn.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="carousel-2" src="assets/homecarousel/musician.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="carousel-3" src="assets/homecarousel/senior.jpg" />
            </Carousel.Item>
          </Carousel>
          <hr/>
        </Grid>
        <Grid>
          <div className="home-about-wrap">
            <Col xs={12} className="home-about">
              <Col className="content" md={4} mdOffset={4}>
                <p>Hello I'm Ko-Ann</p>
                <p>I love to capture the emotions we all go through as people, particularly, those in love.</p>
                <p>Let me help you share your one-of-a-kind love story.</p>
                <p>Based in Hollister, NC. Available in Halifax, Warren, and Nash County areas.</p>
              </Col>
            </Col>
          </div>
        </Grid>
        {/* <Grid>
          <Row className="link-boxes">
            <Col xs={12} sm={4} >
              <div className="link-box">
                <Link to="/about" className="title">Information</Link>
                <p className="widget-delimiter"></p>
                <p>Investment &amp; Details</p>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="link-box">
                <Link to="/about" className="title">Contact Me</Link>
                <p className="widget-delimiter"></p>
                <p>Get in Touch</p>
              </div>
            </Col>
            <Col xs={12} sm={4} >
              <div className="link-box">
                <p className="title">Follow Me</p>
                <p className="widget-delimiter"></p>
                <div className="social">
                  <a href="https://www.facebook.com/Ko-Anns-Photography-1683555588593159/" target="_blank" rel="noopener noreferrer">
                    <FontAwesome.FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/koann12/" target="_blank" rel="noopener noreferrer">
                    <FontAwesome.FaInstagram />
                  </a>
                  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesome.FaPinterest />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <hr/>
        </Grid>*/}
      </div>
    );
  }
}