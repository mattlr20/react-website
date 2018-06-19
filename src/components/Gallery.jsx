import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { Grid, Col, Row, Image, Modal } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import './Gallery.css';

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
                  {/* <div md={12} className="description">
                    <h4><Link state={{ modal: true, returnTo: '/weddings' }} href="/weddings" to="/weddings">Wedding Photos</Link></h4>
                  </div> */}
                </Modal.Body>
            </Modal.Dialog>
          </div>
        </div>
      </Col>
    )
   });

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hollister, NC Portraits &amp; Weddings Photography | KoAnn Photography</title>
            <meta name="description" content="Wedding and Portrait Photography in Hollister, NC, Halifax County and Nash County." />
        </Helmet>
        <Grid className="gal-container">
          <Row className="gal-row">
            {gallery}
          </Row>
        </Grid>
      </div>
    );
  }
}