import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { Grid, Col, Row, Image, Modal } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import './Gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
        heading: props.settings.heading || 'Gallery',
        info: props.settings.info || 'Engagements, Babies, Graduates, and more!',
        imgPath: props.settings.imgPath || 'default',
        metaTitle:  props.settings.meta.title || 'Hollister, NC Portraits &amp; Weddings Photography | KoAnn Photography',
        metaDescription: props.settings.meta.description || 'Wedding and Portrait Photography in Hollister, NC, Halifax County and Nash County.'
    }
  }

  render() {
    const path = this.state.imgPath;
    const gallery = images[path].map( (img,index) => {
      return (
        <Col key={index} xs={12} sm={4} md={3} className="gal-item">
          <div className="box">
            <Link to="#" className="gal-link" data-toggle="modal" data-target={`#img${index}`}>
              <Image src={`assets/${path}/${img.src}`} alt={img.alt} />
            </Link>
            <div className="modal fade" id={`img${index}`} tabIndex="-1" role="dialog">
              <Modal.Dialog>
                  <Modal.Body>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <Image src={`assets/${path}/${img.src}`} alt={img.alt} />
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
    {
      src: 'baby3.jpg',
      alt: 'Babies Hollister, NC koAnn Photography one'
    },
    {
      src: 'engagement3.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 2'
    },
    {
      src: 'grad1.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 1'
    },
    {
      src: 'grad3.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 2'
    }
  ],
  babies: [
    {
      src: 'baby1.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 1'
    },
    {
      src: 'baby2.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 2'
    },
    {
      src: 'baby3.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 3'
    },
    {
      src: 'baby4.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 4'
    },
    {
      src: 'baby5.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 5'
    },
    {
      src: 'baby6.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 6'
    },
    {
      src: 'baby7.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 7'
    },
    {
      src: 'baby8.jpg',
      alt: 'Babies Hollister, NC koAnn Photography 8'
    }
  ],
  engagement: [
    {
      src: 'engagement1.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 1'
    },
    {
      src: 'engagement2.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 2'
    },
    {
      src: 'engagement3.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 3'
    },
    {
      src: 'engagement4.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 4'
    },
    {
      src: 'engagement5.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 5'
    },
    {
      src: 'engagement6.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 6'
    },
    {
      src: 'engagement7.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 7'
    },
    {
      src: 'engagement8.jpg',
      alt: 'Engagement Hollister, NC koAnn Photography 8'
    }
  ],
  graduates: [
    {
      src: 'grad1.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 1'
    },
    {
      src: 'grad2.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 2'
    },
    {
      src: 'grad3.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 3'
    },
    {
      src: 'grad4.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 4'
    },
    {
      src: 'grad5.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 5'
    },
    {
      src: 'grad6.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 6'
    },
    {
      src: 'grad7.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 7'
    },
    {
      src: 'grad8.jpg',
      alt: 'Graduates Hollister, NC koAnn Photography 8'
    }
  ],
  families: [
    {
      src: 'fam1.jpg',
      alt: 'Family Hollister, NC koAnn Photography 1'
    },
    {
      src: 'fam2.jpg',
      alt: 'Family Hollister, NC koAnn Photography 2'
    },
    {
      src: 'fam3.jpg',
      alt: 'Family Hollister, NC koAnn Photography 3'
    },
    {
      src: 'fam4.jpg',
      alt: 'Family Hollister, NC koAnn Photography 4'
    },
    {
      src: 'fam5.jpg',
      alt: 'Family Hollister, NC koAnn Photography 5'
    },
    {
      src: 'fam6.jpg',
      alt: 'Family Hollister, NC koAnn Photography 6'
    },
    {
      src: 'fam7.jpg',
      alt: 'Family Hollister, NC koAnn Photography 7'
    },
    {
      src: 'fam8.jpg',
      alt: 'Family Hollister, NC koAnn Photography 8'
    }
  ]
}
