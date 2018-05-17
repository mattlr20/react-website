import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Image, Row, Col, Modal } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa'
import './Home.css';

const images = ['wedding-1','wedding-2','wedding-3','wedding-4',
  'wedding-5','wedding-6','wedding-7','wedding-8','wedding-9','wedding-10','wedding-11','wedding-12']
   const gallery = images.map( (img,index) => {
    return (
      <Col key={index} xs={12} sm={4} md={3} className="gal-item">
        <div className="box">
          <Link to="#" className="gal-link" data-toggle="modal" data-target={`#${index}`}>
          <Image src={`assets/home/${img}.jpg`} />
          </Link>
          <div className="modal fade" id={index} tabIndex="-1" role="dialog">
            <Modal.Dialog>
                <Modal.Body>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <Image src={`assets/home/${img}.jpg`} />
                  <div md={12} className="description">
                    <h4><Link state={{ modal: true, returnTo: '/weddings' }} href="/weddings" to="/weddings">Wedding Photos</Link></h4>
                  </div>
                </Modal.Body>
            </Modal.Dialog>
          </div>
        </div>
      </Col>
    )
   });

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Row className="link-boxes">
          <Col xs={12} sm={4} >
            <div className="link-box">
              <Link to="/about">Information</Link>
              <p className="widget-delimiter"></p>
              <p>Investment &amp; Details</p>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="link-box">
              <Link to="/about">Contact Me</Link>
              <p className="widget-delimiter"></p>
              <p>Get in Touch</p>
            </div>
          </Col>
          <Col xs={12} sm={4} >
            <div className="link-box">
              Follow Me
              <p className="widget-delimiter"></p>
              <div className="social">
                <Link to="www.facebook.com">
                  <FontAwesome.FaFacebook />
                </Link>
                <Link to="www.instagram.com">
                  <FontAwesome.FaInstagram />
                </Link>
                <Link to="www.pinterest.com">
                  <FontAwesome.FaPinterest />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {gallery}
        </Row>
        <Row>
          <Col>
          <div className="home-about">
            <div className="content">
              <p>Hello I'm Ko-Ann</p>
              <p>I love to capture the emotions we all go through as people, particularly, those in love.</p>
              <p>Let me help you share your one-of-a-kind love story.</p>
              <p>Based in Hollister, NC. Available in Halifax, Warren, and Nash County areas.</p>
            </div>
          </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}