import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { Grid, Col, Row, Image, Modal } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import './Gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
        heading: props.heading || 'Gallery',
        info: props.info || 'Engagements, Babies, Graduates, and more!',
        imgSrc: props.imgSrc || 'default',
        metaTitle:  props.metaTitle || 'Hollister, NC Portraits &amp; Weddings Photography | KoAnn Photography',
        metaDescription: props.metaDescription || 'Wedding and Portrait Photography in Hollister, NC, Halifax County and Nash County.'
    }
  }

  render() {
    const src = this.state.imgSrc;
    console.log(src);
    const gallery = images[src].map( (img,index) => {
      return (
        <Col key={index} xs={12} sm={4} md={3} className="gal-item">
          <div className="box">
            <Link to="#" className="gal-link" data-toggle="modal" data-target={`#img${index}`}>
              <Image src={`assets/${src}/${img}`} />
            </Link>
            <div className="modal fade" id={`img${index}`} tabIndex="-1" role="dialog">
              <Modal.Dialog>
                  <Modal.Body>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <Image src={`assets/${src}/${img}`} />
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

    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{this.state.metaTitle}</title>
            <meta name="description" content={this.state.metaDescription} />
        </Helmet>
        <h1>{this.state.heading}</h1>
        <Grid className="gal-container">
          <Row className="gal-row">
            <p className="text-center">{this.state.info}</p>
            {gallery}
          </Row>
        </Grid>
      </div>
    );
  }
}

const images = {
  default: [
    'baby3.jpg',
    'engagement3.jpg',
    'grad1.jpg',
    'grad3.jpg'
  ],
  babies: [
    'baby1.jpg',
    'baby2.jpg',
    'baby3.jpg',
    'baby4.jpg',
    'baby5.jpg',
    'baby6.jpg',
    'baby7.jpg',
    'baby8.jpg'
  ],
  engagement: [
    'engagement1.jpg',
    'engagement2.jpg',
    'engagement3.jpg',
    'engagement4.jpg',
    'engagement5.jpg',
    'engagement6.jpg',
    'engagement7.jpg',
    'engagement8.jpg'
  ],
  graduates: [
    'grad1.jpg',
    'grad2.jpg',
    'grad3.jpg',
    'grad4.jpg',
    'grad5.jpg',
    'grad6.jpg',
    'grad7.jpg',
    'grad8.jpg'
  ] 
}
