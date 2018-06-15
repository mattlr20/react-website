import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Grid, Col, Carousel } from 'react-bootstrap';
// import * as FontAwesome from 'react-icons/lib/fa'
import './Home.css';

// const images = ['wedding-1','wedding-2','wedding-3','wedding-4',
//   'wedding-5','wedding-6','wedding-7','wedding-8','wedding-9','wedding-10','wedding-11','wedding-12']
//    const gallery = images.map( (img,index) => {
//     return (
//       <Col key={index} xs={12} sm={4} md={3} className="gal-item">
//         <div className="box">
//           <Link to="#" className="gal-link" data-toggle="modal" data-target={`#${index}`}>
//           <Image src={`assets/home/${img}.jpg`} />
//           </Link>
//           <div className="modal fade" id={index} tabIndex="-1" role="dialog">
//             <Modal.Dialog>
//                 <Modal.Body>
//                   <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
//                   <Image src={`assets/home/${img}.jpg`} />
//                   {/* <div md={12} className="description">
//                     <h4><Link state={{ modal: true, returnTo: '/weddings' }} href="/weddings" to="/weddings">Wedding Photos</Link></h4>
//                   </div> */}
//                 </Modal.Body>
//             </Modal.Dialog>
//           </div>
//         </div>
//       </Col>
//     )
//    });

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <hr/>
          <Carousel className="home-carousel">
            <Carousel.Item>
              <img alt="carousel-1" src="assets/home/newborn.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="carousel-2" src="assets/home/musician.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="carousel-3" src="assets/home/senior.jpg" />
            </Carousel.Item>
          </Carousel>
          <hr/>
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
        </Grid> */}
        {/* <Grid className="gal-container">
          <Row className="gal-row">
            {gallery}
          </Row>
        </Grid> */}
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
      </div>
    );
  }
}