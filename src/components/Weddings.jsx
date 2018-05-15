import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Image, Row, Col, Modal } from 'react-bootstrap';
import './Weddings.css';

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
                    <h4>Wedding Photos</h4>
                  </div>
                </Modal.Body>
            </Modal.Dialog>
          </div>
        </div>
      </Col>
    )
   });

export default class Weddings extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <h3>Wedding Photos</h3>
          {gallery}
        </Row>
      </Grid>
    );
  }
}